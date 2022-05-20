import { OcurrenceTypesEnum } from '../enums/ocurrence-types.enum';

export interface CountOcurrencesProxy {
  _id: string;
  count: number;
  type: OcurrenceTypesEnum;
}
