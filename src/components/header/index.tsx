import { ReactElement } from 'react';

import trafficLightImg from '../../assets/images/traffic_light.png';

import './styles.scss';

export function Header(): ReactElement {
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
