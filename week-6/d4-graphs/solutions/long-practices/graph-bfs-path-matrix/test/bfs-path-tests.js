const { expect } = require('chai');

const [findNeighbors, bfsPath] = require('../bfs-path.js');

describe('findNeighbors', () => {

  const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
  ];

  const matrix2 = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5 ]
  ];

  it('Finds all 4 neighbors from an internal node (up, down, left, right)', () => {

    const neighbors1 = findNeighbors([1, 1], matrix1);

    expect(neighbors1.length).to.equal(4);
    expect(neighbors1).to.deep.include.members([ [ 1, 2 ], [ 1, 0 ], [ 2, 1 ], [ 0, 1 ] ]);
    

    const neighbors2 = findNeighbors([6,6], matrix2);

    expect(neighbors2.length).to.equal(4);
    expect(neighbors2).to.deep.include.members([ [ 6,7 ], [ 6,5 ], [ 7,6 ], [ 5,6 ] ]);

  });

  it('Finds the correct two neighbors from a corner node', () => {

    const topCornerNeighbors = findNeighbors([0,0], matrix1);

    expect(topCornerNeighbors.length).to.equal(2);
    expect(topCornerNeighbors).to.deep.include.members([ [ 0, 1 ], [ 1, 0 ] ]);


    const bottomCornerNeighbors = findNeighbors([11,0], matrix2);

    expect(bottomCornerNeighbors.length).to.equal(2);
    expect(bottomCornerNeighbors).to.deep.include.members([ [ 11, 1 ], [ 10, 0 ] ]);

  });

  it('Finds the correct three neighbors from an edge node', () => {

    const bottomEdgeNeighbors = findNeighbors([3,1], matrix1);

    expect(bottomEdgeNeighbors.length).to.equal(3);
    expect(bottomEdgeNeighbors).to.deep.include.members([ [ 3, 2 ], [ 3, 0 ], [ 2, 1 ] ]);
    

    const sideEdgeNeighbors = findNeighbors([2,11], matrix2);

    expect(sideEdgeNeighbors.length).to.equal(3);
    expect(sideEdgeNeighbors).to.deep.include.members([ [ 2, 10 ], [ 3, 11 ], [ 1, 11 ] ]);

  });

});

describe('bfsPath', () => {

  const matrix1 = [ 
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
  ];

  const matrix2 = [
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5 ]
  ];

  it('Traverses the entire matrix and returns an array of all coordinates with no duplicates', () => {

    const traversedPath1 = bfsPath(matrix1, [0,0], 16);

    const expectedPath1 = [
      [ 0, 0 ], [ 0, 1 ],
      [ 1, 0 ], [ 0, 2 ],
      [ 1, 1 ], [ 2, 0 ],
      [ 0, 3 ], [ 1, 2 ],
      [ 2, 1 ], [ 3, 0 ],
      [ 1, 3 ], [ 2, 2 ],
      [ 3, 1 ], [ 2, 3 ],
      [ 3, 2 ], [ 3, 3 ]
      ];

    expect(traversedPath1.length).to.deep.equal(16);
    expect(traversedPath1).to.deep.include.members(expectedPath1);


    const traversedPath2 = bfsPath(matrix2, [0,0], 5);

    const expectedPath2 = [
      [ 0, 0 ],  [ 0, 1 ],  [ 1, 0 ],  [ 0, 2 ],  [ 1, 1 ],  [ 2, 0 ],
      [ 0, 3 ],  [ 1, 2 ],  [ 2, 1 ],  [ 3, 0 ],  [ 0, 4 ],  [ 1, 3 ],
      [ 2, 2 ],  [ 3, 1 ],  [ 4, 0 ],  [ 0, 5 ],  [ 1, 4 ],  [ 2, 3 ],
      [ 3, 2 ],  [ 4, 1 ],  [ 5, 0 ],  [ 0, 6 ],  [ 1, 5 ],  [ 2, 4 ],
      [ 3, 3 ],  [ 4, 2 ],  [ 5, 1 ],  [ 6, 0 ],  [ 0, 7 ],  [ 1, 6 ],
      [ 2, 5 ],  [ 3, 4 ],  [ 4, 3 ],  [ 5, 2 ],  [ 6, 1 ],  [ 7, 0 ],
      [ 0, 8 ],  [ 1, 7 ],  [ 2, 6 ],  [ 3, 5 ],  [ 4, 4 ],  [ 5, 3 ],
      [ 6, 2 ],  [ 7, 1 ],  [ 8, 0 ],  [ 0, 9 ],  [ 1, 8 ],  [ 2, 7 ],
      [ 3, 6 ],  [ 4, 5 ],  [ 5, 4 ],  [ 6, 3 ],  [ 7, 2 ],  [ 8, 1 ],
      [ 9, 0 ],  [ 0, 10 ], [ 1, 9 ],  [ 2, 8 ],  [ 3, 7 ],  [ 4, 6 ],
      [ 5, 5 ],  [ 6, 4 ],  [ 7, 3 ],  [ 8, 2 ],  [ 9, 1 ],  [ 10, 0 ],
      [ 0, 11 ], [ 1, 10 ], [ 2, 9 ],  [ 3, 8 ],  [ 4, 7 ],  [ 5, 6 ],
      [ 6, 5 ],  [ 7, 4 ],  [ 8, 3 ],  [ 9, 2 ],  [ 10, 1 ], [ 11, 0 ],
      [ 1, 11 ], [ 2, 10 ], [ 3, 9 ],  [ 4, 8 ],  [ 5, 7 ],  [ 6, 6 ],
      [ 7, 5 ],  [ 8, 4 ],  [ 9, 3 ],  [ 10, 2 ], [ 11, 1 ], [ 2, 11 ],
      [ 3, 10 ], [ 4, 9 ],  [ 5, 8 ],  [ 6, 7 ],  [ 7, 6 ],  [ 8, 5 ],
      [ 9, 4 ],  [ 10, 3 ], [ 11, 2 ], [ 3, 11 ], [ 4, 10 ], [ 5, 9 ],   
      [ 6, 8 ],  [ 7, 7 ],  [ 8, 6 ],  [ 9, 5 ],  [ 10, 4 ], [ 11, 3 ],  
      [ 4, 11 ], [ 5, 10 ], [ 6, 9 ],  [ 7, 8 ],  [ 8, 7 ],  [ 9, 6 ],   
      [ 10, 5 ], [ 11, 4 ], [ 5, 11 ], [ 6, 10 ], [ 7, 9 ],  [ 8, 8 ],   
      [ 9, 7 ],  [ 10, 6 ], [ 11, 5 ], [ 6, 11 ], [ 7, 10 ], [ 8, 9 ],   
      [ 9, 8 ],  [ 10, 7 ], [ 11, 6 ], [ 7, 11 ], [ 8, 10 ], [ 9, 9 ],   
      [ 10, 8 ], [ 11, 7 ], [ 8, 11 ], [ 9, 10 ], [ 10, 9 ], [ 11, 8 ],  
      [ 9, 11 ], [ 10, 10 ],[ 11, 9 ], [ 10, 11 ],[ 11, 10 ],
      [ 11, 11 ]
    ];

    expect(traversedPath2.length).to.deep.equal(144);
    expect(traversedPath2).to.deep.include.members(expectedPath2);

  });

  it('Returns a path with a single node if end value is located at start node', () => {

    const traversedPath1 = bfsPath(matrix1, [2,2], 11);

    const expectedPath1 = [ [ 2, 2 ] ];

    expect(traversedPath1.length).to.deep.equal(1);
    expect(traversedPath1).to.deep.equal(expectedPath1);


    const traversedPath2 = bfsPath(matrix2, [3,1], 2);

    const expectedPath2 = [ [ 3, 1 ] ];

    expect(traversedPath2.length).to.deep.equal(1);
    expect(traversedPath2).to.deep.equal(expectedPath2);

  });

  it('Can handle various start nodes and end values', () => {

    const traversedPath1 = bfsPath(matrix1, [1,2], 8);

    const expectedPath1 = [ [ 1, 2 ], [ 1, 3 ] ];

    expect(traversedPath1).to.deep.include.members(expectedPath1);


    const traversedPath2 = bfsPath(matrix2, [4,9], 3);

    const expectedPath2 = [ [ 4, 9 ], [ 5, 9 ] ];

    expect(traversedPath2).to.deep.include.members(expectedPath2);

  });

  it('Returns false if end value is not found after traversing matrix', () => {

    const traversal1 = bfsPath(matrix1, [0,0], 17);
    const traversal2 = bfsPath(matrix2, [3,3], 0);

    expect(traversal1).to.deep.equal(false);
    expect(traversal2).to.deep.equal(false);

  });

});
