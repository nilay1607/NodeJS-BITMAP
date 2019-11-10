"use strict";

/**
 * Read input from file
 */
const fs_1 = require("fs");
const index = require("../src/index");
['example_2.txt','example3x4_1.txt','example3x4_2.txt'].forEach((fileName) => {
  try {
    const contents = fs_1.readFileSync(fileName, 'utf8');
    const testCasesParsed = contents.trim().split('\n');
    //first parameter indicates number of test cases
    const testCases = testCasesParsed[0];
    testCasesParsed.shift();
    for (let i = 0; i < testCases; i++) {
      let size =[];
      //number of rows and columns
      size = testCasesParsed[0].split(' ');
      testCasesParsed.shift();
      let bmap = [];
      for (let j = 0; j < size[0]; j++) {
        bmap.push(testCasesParsed[0]);
        testCasesParsed.shift();
      }
      const [rows, columns] = size;
      //for each test case call run function to get output.
      const output = index.run(rows, columns, bmap.join(','));
      console.log(output);
    }
  }
  catch (error) {
    console.error(error);
  }
});