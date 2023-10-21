// import { Agent, setGlobalDispatcher } from 'undici';
import useSWR from 'swr';

const fetch = require('node-fetch');
const https = require('https');

const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    });

async function sendRequest(amount: number, begin: string) {
  const url = `https://policzmi.pl/inflation?amount=${amount}&inflation=1&begin=${begin}&noOfMonths=48&futureInflation=0&toNow=on`;


  const response = await fetch(url, {agent: httpsAgent});
  const data = await response.json();

  return data;
}

// sendRequest(100000, "2020-01")
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

async function fetcher(params: [number, string]) {
  const [amount, begin] = params;
  return sendRequest(amount, begin);
}

export function Inflation() {
  const { data, error } = useSWR([500, '2020-01'], fetcher);

  
  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  // Render your data
  return <div>{data["buyingPowers"]}</div>;
}

