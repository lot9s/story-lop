/*
  This method generates a random integer between 2 values.

  Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

  @arg {number} min
  @arg {number} max
  @return {number}
*/
var getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
