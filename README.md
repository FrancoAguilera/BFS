# For the TLDR audience

```bash
$ git clone git@github.com:FrancoAguilera/Breadth-first-search.git
$ cd Breadth-first-search
$ npm install
$ npm start
```

## The friends example

Let's say you have a group of friends, and as you can see on the example below, there are several friends (nodes) connected by a path (edges). 
</br>
</br>
For example:
**"Jhon is connected to liz through Robert"**, or **"Jhon is connected to Susan through Ana/Robert"**

So...
</br> 
Step one: pass from this
![friends](https://i.ibb.co/YTnhwGK/friends.png)

To this
```typescript
const friends = [
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
```
Step two: create a mapping to represent the "friends graph"
```typescript
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
```  

Step three: apply the BFS algorithm
See example in ["Find the path"](https://github.com/FrancoAguilera/Breadth-first-search/blob/85f8fff832b7edb0cd4d3fe5a24b1976f023365d/findPath.ts#L140)


---


# The breadth first search (BFS) Javascript

[Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)


![graph](https://www.simplilearn.com/ice9/free_resources_article_thumb/BFS-Algorithm-Soni/bredth-first-search-in-graph-data-structure.png)


>_BFS is a graph traversal approach in which you start at a source node and layer >by layer through the graph, analyzing the nodes directly related to the source >node. Then, in BFS traversal, you must move on to the next-level neighbor nodes._



