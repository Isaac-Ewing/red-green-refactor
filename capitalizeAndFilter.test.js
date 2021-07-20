describe('capitalizes all strings and removes any starting with F/f', () => {
  it('removes strings', () => {
    const inputData = ['Animal', 'farce', 'Fear', 'game'];
    const expected = ['ANIMAL', 'GAME'];
    const actual = capitalizeAndFilter(inputData);
      
    expect(actual).toEqual(expected); 
  }); 
});
