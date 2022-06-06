import { OcurrenceTypesEnum } from '../enums/ocurrence-types.enum';

export interface OcurrencesProxy {
  _id?: string;
  userName: string;
  type: OcurrenceTypesEnum;
  date: Date;
  title: string;
  description: string;
  suggestions: string;
  sector: string;
  status?: string;
}
