var assert = require('chai').assert;
var numbers = [1, 2, 3, 4, 5];
it('is array of numbers', function() {
    assert.isArray(numbers);
});
it('array contains 2', function() {
    assert.include(numbers,2);
});
it('array contains 5 numbers', function() {
    assert.lengthOf(numbers,5);
});
