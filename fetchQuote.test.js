import getQuote from './fetchQuote';
// import { jest } from '@jest/globals'; 

describe('returns a futerama quote', () => {
  it('returns a random quote', async () => {
    const { character, quote, image } = await getQuote();
    const result = {
      'name': character,
      image, 
      'text': quote,
    };
    
    expect(result).toEqual({
      name: expect.any(String), 
      image: expect.any(String),
      text: expect.any(String),
    });
  }); 
});
