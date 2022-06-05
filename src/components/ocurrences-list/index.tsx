//#region Imports

import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import { OcurrencesProxy } from '../../models/proxies/ocurrences.proxy';
import { getOcurrences } from '../../services/ocurrences';

import './styles.scss';

//#endregion

export default function OcurrencesList(): ReactElement {

  //#region Queries

  const { data: ocurrences } = useQuery<OcurrencesProxy[]>(
    ['ocurrences'],
    async () => await getOcurrences(),
  );

  //#endregion

  //#region Element

  //#endregion

  return(
    <div className="ocurrences-list">
      <h1>Ocorrência</h1>
      <hr />
      <br/>
      <div className="ocurrences-list--titles">
        <strong>Funcionário</strong>
        <strong>Título</strong>
        <strong>Setor</strong>
        <strong>Status</strong>
      </div>
      <div className="ocurrences-list--items">
        {
          ocurrences?.map(ocurrence =>
            <div className="ocurrences-list--items--item">
              <p>{ ocurrence.userName }</p>
              <p>{ ocurrence.title }</p>
              <p>{ ocurrence?.sector }</p>
              <p>{ ocurrence.status || 'sem status' }</p>
            </div>
          )
        }
      </div>
    </div>
  )
}
