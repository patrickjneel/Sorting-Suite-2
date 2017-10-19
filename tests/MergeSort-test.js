const assert  = require('chai').assert;
const mergeSort = require('../scripts/MergeSort.js');
const randomArray = require('../scripts/RandomGenerate.js').randomArray;
const checkArray = require('../scripts/RandomGenerate.js').checkArray;


describe('merge-Sort', () => {


  it('should be a function', function () {
    assert.isFunction(mergeSort);
  });

  it('should take a small array of numbers and sort them', function () {
    const smallArray = [3, 5, 1, 2, 4];
    assert.deepEqual(mergeSort(smallArray),[1, 2, 3, 4, 5]);
  
  });

  it('should take a small array of letters and sort them', function () {
    const smallNum = ['c', 'a', 'e', 'f', 'd', 'b'];
    assert.deepEqual(mergeSort(smallNum), ['a', 'b', 'c', 'd', 'e', 'f']);

  });

  it('should take a small array of negative and positive numbers and sort them', function () {
    const negArr = [-5, 1,  -1, 0, -3, 2, -4, -2];
    assert.deepEqual(mergeSort(negArr), [-5, -4, -3, -2, -1, 0, 1, 2]);


  });

  it('should sort an array of 100,000', function () {
    const array =  randomArray(1, 250000, 100000);
    assert.deepEqual(checkArray(mergeSort(array)), true);
    
  });
  

});

