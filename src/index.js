'use strict';
const bitMapCore = require('./bitMapCore');
const helpers = require('./helpers');
/**
 * calls bitmapcore to get output
 * @param rows - Max number of rows
 * @param columns - Max number of columns
 * @param bitmap - Bitmap
 * @returns output
 */
function run(rows, columns, bitmap) {
  const result = bitMapCore.bitMapCore(
    parseInt(rows, 10),
    parseInt(columns, 10),
    helpers.input(bitmap),
  );
  return helpers.output(result);
}

exports.run = run;
