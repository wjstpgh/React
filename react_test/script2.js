import fetch from 'node-fetch';

const getPeople = async () => {
  const response = await fetch('https://swapi.py4e.com/api/people');
  const data = await response.json();
  return {
    count: data.count,
    results: data.results
  };
}

export default getPeople;