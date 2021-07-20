describe('getName', () => {
  it('returns the name prop of an object', () => {
    const actual = 'Isaac';
    const expected = getName();
    expect(actual).toEqual(expected);
  });
});
