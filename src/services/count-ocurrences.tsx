//#region Imports

import { environment } from '../environments/environment';
import { CountOcurrencesProxy } from '../models/proxies/count-ocurrences.proxy';
import { axios } from './api';

//#endregion

//#region Methods

export async function getCountsOcurrences(): Promise<CountOcurrencesProxy[]> {
  try {
    const url = environment.api.countOcurrences.base;

    const result = await axios.get<CountOcurrencesProxy[]>(url);

    return result.data
  } catch (error) {
    console.error(error);
    return [];
  }
}

//#endregion
