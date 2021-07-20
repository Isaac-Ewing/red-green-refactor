import fetch from 'node-fetch';

const getQuote = async () => {
  const data = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const body = await data.json();
  const result = body[0];
  return result;
};
    
export default getQuote;
