/**
 * Convert bitmap inputs to numerical bitmap
 * @param input
 * @returns int bitmap
 */
function input(input) {
  const rows = input.split(',');
  const bitmap = rows.map(row =>
    row.split('').map(pixel => parseInt(pixel, 10)),
  );
  return bitmap;
}

/**
 * Produces output
 * @param result
 * @returns output
 */
function output(result) {
  return result.map(x => x.join(' ')).join('\n');
}

exports.input = input;
exports.output = output;
