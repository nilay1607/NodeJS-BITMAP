'use strict';

/**
 * predefined directions for changing position north-south-west-east
 */
const DIR = 4;
const DIRX = [-1, 1, 0, 0];
const DIRY = [0, 0, 1, -1];

/**
 * Maximal value : Infinity
 */
const INFINITY = Number.POSITIVE_INFINITY;

/**
 * Creates max value array
 * @param count - length of a new array
 * @returns array with elements of value Number.POSITIVE_INFINITY
 */
function createMaxValueArray(count) {
  const array = new Array(count);
  array.fill(INFINITY);
  return array;
}

/**
 * Creates a node for white pixel containing onw position and default distance to itself (0)
 * @param rowIndex: position in a row
 * @param columnIndex: position in a column
 * @returns white pixel node
 */
function createWhitePixelNode(rowIndex, columnIndex) {
  const distanceCost = 0;
  return [rowIndex, columnIndex, distanceCost];
}

/**
 * Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures.
 * @param rows
 * @param columns
 * @param bitmap
 */
function bitMapCore(rows, columns, bitmap) {
  const queue = [];
  bitmap.forEach((row, rowIndex) => {
    return row.forEach((pixel, columnIndex) => {
      if (pixel === 1) {
        // enqueue
        queue.push(createWhitePixelNode(rowIndex, columnIndex));
      }
    });
  });
  const resultBitmap = createMaxValueArray(rows).map(() =>
    createMaxValueArray(columns),
  );
  const queueLength = queue.length;
  while (queueLength > 0 && queue[0]) {
    const currentNode = queue[0];
    const [rowIndex, columnIndex, distanceCost] = currentNode;
    if (distanceCost < resultBitmap[rowIndex][columnIndex]) {
      resultBitmap[rowIndex][columnIndex] = distanceCost;
    }
    for (let directionIndex = 0; directionIndex < DIR; ++directionIndex) {
      const newRowIndex = rowIndex + DIRX[directionIndex];
      const newColumnIndex = columnIndex + DIRY[directionIndex];
      if (
        isInBoundaries(newRowIndex, newColumnIndex) &&
        isInfinite(newRowIndex, newColumnIndex)
      ) {
        // Set the distance from them pixel to nearest white pixel
        resultBitmap[newRowIndex][newColumnIndex] = distanceCost + 1;
        queue.push([newRowIndex, newColumnIndex, distanceCost + 1]);
      }
    }
    // remove top element
    queue.shift();
  }
  /**
   * Determines whether value of the node is infinity
   * @param x - row index
   * @param y - column index
   * @returns true if value is still infinity
   */
  function isInfinite(x, y) {
    return resultBitmap[x][y] === INFINITY;
  }
  /**
   * Returns true if the given point is inside the boundaries of the array
   * @param x - row index
   * @param y - column index
   * @returns true if in boundaries
   */
  function isInBoundaries(x, y) {
    return x >= 0 && x < rows && y >= 0 && y < columns;
  }
  return resultBitmap;
}

exports.bitMapCore = bitMapCore;
