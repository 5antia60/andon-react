import { ReactElement, useState } from 'react';
import { useQuery } from 'react-query';
import { CountOcurrencesProxy } from '../../models/proxies/count-ocurrences.proxy';
import { getCountsOcurrences } from '../../services/count-ocurrences';

import trafficLightImg from '../../assets/images/traffic_light.png';

import './styles.scss';

export function Header(): ReactElement {

  const { data: countsOcurrences, isLoading } = useQuery(
    ['counts-ocurrences'],
    async () => await getCountsOcurrences(), { onSuccess: data => console.log(data) }
  );

  return (
    <div className="header">
      <div className="header--title">
        <img src={ trafficLightImg } alt="andom"/>
        <h4>Andom Dashboard</h4>
      </div>
      <div className="header--counts">
        <div className="header--counts--type">
          <strong>Maquina</strong>
          <p>6</p>
        </div>
      </div>
    </div>
  )
}
