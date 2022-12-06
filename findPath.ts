// From all the given connections firt you'll need
// to create a graph, based on the friendship connection

interface Friend {
  friendOne: string;
  friendTwo: string;
}

interface Node {
  Name: string;
  friends: string[];
}

interface FriendsGraph {
  [key: string]: Node;
}

const friends: Friend[] = [
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

// const friendsGraph = friends.reduce((graph, link) => {}, {});
