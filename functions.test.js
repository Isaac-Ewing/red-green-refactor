import getName from './getName';

describe('getName', () => {
  it('returns the name prop of an object', () => {
    const name = { name: 'Isaac' }; 
    const expected = 'Isaac';
    const actual = getName(name);

    expect(actual).toEqual(expected);
  });
});
