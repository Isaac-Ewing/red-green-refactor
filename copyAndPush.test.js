import copyAndPush from './copyAndPush.js';

describe('returns a copy of an array with a new item pushed to the end', () => {
  it('returns [1, 2, 3, 4]', () => {
    const numbers = [1, 2, 3];
    const expected = [1, 2, 3, 4];
    const actual = copyAndPush(numbers, 4);
  
    expect(actual).toEqual(expected);
  });
});
