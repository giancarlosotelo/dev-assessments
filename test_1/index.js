"use strict";
const data = require('./test_data.json');
/**
 * The `test_data.json` contains an object array of "The Simpsons" characters and their catchphrase. This function
 * will add a new property `example` to each object that is a combining the `first_name`, `last_name`, and
 * `catchphrase` properties into a new sentence.
 *
 * The new sentence should read like "Homer Simpson says Doh!".  See the `expected_output.json` file for the
 * expected results of this.
 *
 * @returns  {Object[]}
 */
module.exports = function test1() {
  return data.map((item) => {
    return {
      ...item,
      example: `${item.first_name} ${item.last_name} says ${item.catchphrase}`,
    };
  });
};