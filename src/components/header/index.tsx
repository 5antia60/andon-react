//#region Imports

import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { OcurrenceTypesEnum } from '../../models/enums/ocurrence-types.enum';
import { CountOcurrencesProxy } from '../../models/proxies/count-ocurrences.proxy';
import { getCountsOcurrences } from '../../services/count-ocurrences';

import trafficLightImg from '../../assets/images/traffic_light.png';

import './styles.scss';

//#endregion

export function Header(): ReactElement {

  //#region Queries

  const { data: countsOcurrences } = useQuery<CountOcurrencesProxy[]>(
    ['counts-ocurrences'],
    async () => await getCountsOcurrences(),
  );

  //#endregion

  //#region Properties

  const typesNames: Record<OcurrenceTypesEnum, string> = {
    [OcurrenceTypesEnum.NONE]: 'Indefinido',
    [OcurrenceTypesEnum.MACHINE]: 'Máquina',
    [OcurrenceTypesEnum.EMPLOYEE]: 'Empregado',
    [OcurrenceTypesEnum.ENERGY]: 'Energia',
    [OcurrenceTypesEnum.OTHER]: 'Outros',
  };

  //#endregion

  //#region Elements

  return (
    <div className="header">
      <div className="header--title">
        <img src={ trafficLightImg } alt="andom"/>
        <h4>Andom Dashboard</h4>
      </div>
      <div className="header--counts">
        {countsOcurrences?.map((ocurrence, index) =>
            <div className="header--counts--type" key={ index }>
              <strong>{ typesNames[ocurrence.type] }</strong>
              <p>{ ocurrence.count }</p>
            </div>
          )
        }
      </div>
    </div>
  );

  //#endregion

}
