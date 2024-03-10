import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  maxOfTwoNumbers,
  findLongestWord,
  sumArray,
  averageNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  greatestProduct
} from '../src/funcArray.js';

const shuffle = (currentArray) => {
  let array = [...currentArray];
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter--);
    array[index] = [array[counter], array[counter] = array[index]][0];
  }
  return array;
};

it('1+1 = 2', () => assert.strictEqual(1 + 1, 2));

describe('Find the maximum - maxOfTwoNumbers #1', () => {
  it('Defines maxOfTwoNumbers', () => {
    assert.strictEqual(typeof maxOfTwoNumbers, 'function');
  });

  it('First parameter larger', () => {
    assert.strictEqual(maxOfTwoNumbers(2, 1), 2);
  });

  it('Second parameter larger', () => {
    assert.strictEqual(maxOfTwoNumbers(1, 3), 3);
  });

  it('First and Second parameter equal', () => {
    assert.strictEqual(maxOfTwoNumbers(4, 4), 4);
  });
});

describe('Finding Longest Word - findLongestWord #2', () => {
  it('Defines findLongestWord', () => {
    assert.strictEqual(typeof findLongestWord, 'function');
  });

  it('returns undefined with an empty array', () => {
    assert.strictEqual(findLongestWord([]), undefined);
  });

  it('returns the word with a 1-word array', () => {
    assert.strictEqual(findLongestWord(['test']), 'test');
  });

  it('returns the first occurrence word when longest has multiple occurrences', () => {
    assert.strictEqual(findLongestWord(['foo', 'bar']), 'foo');
    assert.strictEqual(findLongestWord(['bar', 'foo']), 'bar');
  });

  it('returns the longest occurrence when test has multiple words', () => {
    let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'factoriaF5'];
    for (let i = 0; i < 10; i++) {
      assert.strictEqual(findLongestWord(shuffle(words)), 'factoriaF5');
    }
  });
});

describe('Calculating a Sum - sumArray #3', () => {
  it('Defines sumArray', () => {
    assert.strictEqual(typeof sumArray, 'function');
  });

  it('returns zero with an empty array', () => {
    assert.strictEqual(sumArray([]), 0);
  });

  it('returns the number with a one-number array', () => {
    assert.strictEqual(sumArray([4]), 4);
  });

  it('returns zero if all elements are zero', () => {
    assert.strictEqual(sumArray([0, 0, 0, 0, 0]), 0);
  });

  it('returns the sum, positive', () => {
    assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15);
  });

  it('returns the sum, negative', () => {
    assert.strictEqual(sumArray([-1, -2, -3, -4, -5]), -15);
  });
});

describe('Calculating the Average - averageNumbers #4', () => {
  it('Defines averageNumbers', () => {
    assert.strictEqual(typeof averageNumbers, 'function');
  });

  it('returns undefined with an empty array', () => {
    assert.strictEqual(averageNumbers([]), undefined);
  });

  it('returns the average of a one-element array', () => {
    assert.strictEqual(averageNumbers([9]), 9);
  });

  it('returns the average even with negative values', () => {
    assert.strictEqual(averageNumbers([9, -3, -4, 6]), 2);
  });

  it('returns the average of the array', () => {
    assert.strictEqual(averageNumbers([9, 10, 82, 92, 32, 102, 58]), 55);
  });

  it('returns the average of the array with a float result', () => {
    assert.strictEqual(averageNumbers([1, 2]), 1.5);
  });
});

describe('Calculating the Average - averageWordLength #5', () => {
  it('Defines averageWordLength', () => {
    assert.strictEqual(typeof averageWordLength, 'function');
  });

  it('returns undefined with an empty array', () => {
    assert.strictEqual(averageWordLength([]), undefined);
  });

  it('returns the length of a one-element array', () => {
    assert.strictEqual(averageWordLength(['bcncodes']), 8);
  });

  it('returns the length of a one-element array, float', () => {
    assert.strictEqual(averageWordLength(['a', 'ab']), 1.5);
  });

  it('returns the average of the array', () => {
    assert.strictEqual(
      averageWordLength(['Bcncodes', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers']),
      7
    );
  });
});

describe('Unique Arrays - uniquifyArray #6', () => {
  it('Defines uniquifyArray', () => {
    assert.strictEqual(typeof uniquifyArray, 'function');
  });

  it('returns undefined with an empty array', () => {
    assert.strictEqual(uniquifyArray([]), undefined);
  });

  it('returns the array with a single-element array', () => {
    assert.deepEqual(uniquifyArray(['FactoriaF5']), ['FactoriaF5']);
  });

  it('returns the correct array with an array of the same element', () => {
    assert.deepEqual(uniquifyArray(['FactoriaF5', 'FactoriaF5', 'FactoriaF5']), ['FactoriaF5']);
  });

  it('returns the same array when no element is repeated', () => {
    assert.deepEqual(uniquifyArray(['Cat', 'Dog', 'Cow']), ['Cat', 'Dog', 'Cow']);
  });

  it('returns the uniquified array', () => {
    assert.deepEqual(
      uniquifyArray(['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android']),
      ['iPhone', 'Samsung', 'Android', 'iOS', 'Nokia', 'Blackberry']
    );
  });
});
