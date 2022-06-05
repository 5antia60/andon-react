//#region Imports

import { environment } from '../environments/environment';
import { OcurrencesProxy } from '../models/proxies/ocurrences.proxy';
import { axios } from './api';

//#endregion

//#region Methods

export async function getOcurrences(): Promise<OcurrencesProxy[]> {
  try {
    const url = environment.api.ocurrences.base;

    const result = await axios.get<OcurrencesProxy[]>(url);

    return result.data
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function postOcurrence(payload: OcurrencesProxy): Promise<void> {
  try {
    const url = environment.api.ocurrences.base;

    await axios.post<OcurrencesProxy>(url, payload);
  } catch (error) {
    console.error(error);
  }
}

//#endregion
