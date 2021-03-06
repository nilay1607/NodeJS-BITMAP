const expect = require('chai').expect;

const input = require('../src/helpers').input;
const output = require('../src/helpers').output;

describe('Test 3x4 bitmaps conversion', () => {
  const assertions = [
    {
      bitmap: '0001,0011,0110',
      expected: [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
      ],
    },
    {
      bitmap: '0000,0000,0000',
      expected: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    },
  ];

  assertions.forEach(({ bitmap, expected }) => {
    it(`Expected bitmap: ${expected}`, () => {
      const result = input(bitmap);
      expect(result).to.deep.equal(expected);
    });
  });
});

describe('Output:', () => {
  const assertions = [
    {
      bitmap: [
        [0, 0, 0, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 0],
      ],
      expected: '0 0 0 10 0 1 10 1 1 0',
    },
  ];

  assertions.forEach(({ bitmap, expected }) => {
    it(`Expected output matrix: ${expected} to be string`, () => {
      const result = output(bitmap);
      expect(result.split('\n').join('')).to.equal(expected);
    });
  });
});
