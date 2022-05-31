import { environment } from '../environments/environment';
import { CountOcurrencesProxy } from '../models/proxies/count-ocurrences.proxy';
import { axios } from './api';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Powered-By':	'Express',
};

export async function getCountsOcurrences(): Promise<CountOcurrencesProxy[]> {
  try {
    const url = environment.api.countOcurrences.base;

    const result = await axios.get<CountOcurrencesProxy[]>(url, { headers });

    return result.data
  } catch (error) {
    console.error(error);
    return [];
  }
}
