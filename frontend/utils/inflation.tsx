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

export async function fetcher(params: [number, string]) {
  const [amount, begin] = params;
  return sendRequest(amount, begin);
}
