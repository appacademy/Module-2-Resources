/*
Graph Vocabulary:
Vertex: A node in the graph. Vertex and node can be used interchangeably
Directed edge: A one-way connection from one vertex to another
Undirected edge: A two-way connection between two vertices. Functionally the same as a bidirectional edge
Bidirectional edge: A two-way connection between two vertices that can be traversed in either direction
Edge weight: The cost of traversing an edge.
Cyclic/acyclic: A cyclic graph is a graph with at least 1 cycle, or the potential to have a cycle
Adjacency list: A way of representing a graph in code with an object


*/

//Many times we represent graphs using adjacency lists:

const graph1 = {
  T: ["V"],
  U: ["V"],
  V: [],
};

const graph2 = {
  X: ["Y"],
  Y: ["Z"],
  Z: ["X"],
};

const graph3 = {
  A: ["B", "C", "E"],
  B: [],
  C: ["B", "D"],
  D: [],
  E: ["A"],
  F: ["E"],
};

//an undirected graph may look like this:
const undirected = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};