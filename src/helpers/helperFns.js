import { TIMEOUT_SEC } from './config.js';

const timeout = (s) => {
  return new Promise((_, reject) => {
    return setTimeout(() => {
      return reject(`Request is taking too long. More than ${s} seconds`);
    }, s * 1000);
  });
};

export const getJSON = async (url, errMsg = 'Something went wrong.') => {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${errMsg} ${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
