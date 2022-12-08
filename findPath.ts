/*
  On the example below we're going to work with a group of friends, but the 
  same principle applies for every situation that can be reduced to nodes with edges 
  between them (e.g.: cities and roads)
*/
interface Friendship {
  friendOne: string;
  friendTwo: string;
}

interface Nodes {
  node: string;
  edges: string[];
  visited: boolean;
  parent: null | Nodes;
}

interface FriendsGraph {
  [key: string]: Nodes;
}

// From all the given connections first you'll need
// to create a "graph"
const friends: Friendship[] = [
  {
    friendOne: "Jhon",
    friendTwo: "Matt",
  },
  {
    friendOne: "Jhon",
    friendTwo: "Robert",
  },
  {
    friendOne: "Jhon",
    friendTwo: "Ana",
  },
  {
    friendOne: "Matt",
    friendTwo: "Robert",
  },
  {
    friendOne: "Ana",
    friendTwo: "Susan",
  },
  {
    friendOne: "Ana",
    friendTwo: "Robert",
  },
  {
    friendOne: "Robert",
    friendTwo: "Liz",
  },
  {
    friendOne: "Robert",
    friendTwo: "Susan",
  },
];

// create an array with all the possible nodes on the list
let nodes = [];
for (let i = 0; i < friends.length; i++) {
  nodes.push(friends[i].friendOne);
  nodes.push(friends[i].friendTwo);
}
// remove duplicated values
nodes = [...new Set(nodes)]; // [ 'Jhon', 'Matt', 'Robert', 'Ana', 'Susan', 'Liz' ]

// Create he Graph of nodes and the edges array assosiated to it
const graph = nodes.reduce<FriendsGraph>((graph: FriendsGraph, node: string) => {
  const edges = friends.reduce((edgesList: string[], edge) => {
    if (edge.friendOne === node) {
      edgesList.push(edge.friendTwo);
    }

    if (edge.friendTwo === node) {
      edgesList.push(edge.friendOne);
    }

    return edgesList;
  }, []);

  graph[node] = {
    node,
    edges,
    visited: false,
    parent: null, // this will be used to find the connected nodes
  };

  return graph;
}, {});

/*
this is how the graph should look like
{
  Jhon: {
    node: 'Jhon',
    edges: [ 'Matt', 'Robert', 'Ana' ],
    visited: false,
    parent: null
  },
  Matt: {
    node: 'Matt',
    edges: [ 'Jhon', 'Robert' ],
    visited: false,
    parent: null
  },
  Robert: {
    node: 'Robert',
    edges: [ 'Jhon', 'Matt', 'Ana', 'Liz', 'Susan' ],
    visited: false,
    parent: null
  },
  Ana: {
    node: 'Ana',
    edges: [ 'Jhon', 'Susan', 'Robert' ],
    visited: false,
    parent: null
  },
  Susan: {
    node: 'Susan',
    edges: [ 'Ana', 'Robert' ],
    visited: false,
    parent: null
  },
  Liz: { 
    node: 'Liz', 
    edges: [ 'Robert' ], 
    visited: false, 
    parent: null 
  }
}
*/

const getPath = (currentNode: Nodes): string[] => {
  // return the connection path
  const path = [];
  path.push(currentNode.node);

  let next = currentNode.parent;
  while (next != null) {
    path.push(next.node);
    next = next.parent;
  }

  return path;
};

// and now we have a graph map about the connections, we can apply
// the BFS algorithm
const findConnection = (connection: Friendship): string[] => {
  const { friendOne: start, friendTwo: end } = connection;
  const path = [];

  // BFS algorithm
  const queue = [];

  // start by looking on the start node of the graph
  graph[start].visited = true;
  queue.push(graph[start]);

  // inspect all the nodes connected to that node
  while (queue.length > 0) {
    const current: Nodes = queue.shift()!;

    if (current.node === end) {
      console.log("Found connection");
      return getPath(current);
    }

    for (let i = 0; i < current.edges.length; i++) {
      const friend = graph[current.edges[i]];
      if (!friend.visited) {
        friend.visited = true;
        friend.parent = current;
        queue.push(friend);
      }
    }
  }

  return path;
};

const connectionPath = findConnection({ friendOne: "Jhon", friendTwo: "Liz" });
// [ 'Liz', 'Robert', 'Jhon' ]
