import * as baseAxios from 'axios';
import { environment } from '../environments/environment';

export const axios = baseAxios.default.create({
  baseURL: environment.api.baseUrl,
});

