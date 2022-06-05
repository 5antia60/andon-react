//#region Imports

import { ReactElement, useState } from 'react';
import { OcurrenceTypesEnum } from '../../models/enums/ocurrence-types.enum';
import { OcurrencesProxy } from '../../models/proxies/ocurrences.proxy';
import { postOcurrence } from '../../services/ocurrences';

import './styles.scss';

//#endregion

export function Forms(): ReactElement {

  //#region Properties

  const [form, setForm] = useState<OcurrencesProxy>({
    userName: '',
    type: OcurrenceTypesEnum.NONE,
    date: new Date(),
    title: '',
    description: '',
    suggestions: '',
    sector: '',
    status: '',
  });

  //#endregion

  //#region Methods

  async function onSubmit() {
    if (form.userName === '' || form.type === OcurrenceTypesEnum.NONE || form.title === '' || form.description === '' || form.suggestions === '' || form.sector === '')
      return window.alert('Preenche todos os campos.');

    await postOcurrence(form).catch(err => console.error(err));
    window.alert('Sucesso! Ocorrência cadastrada.');
    setForm({
      userName: '',
      type: OcurrenceTypesEnum.NONE,
      date: new Date(),
      title: '',
      description: '',
      suggestions: '',
      sector: '',
      status: '',
    });
  }

  //#endregion

  //#region Element

  return(
    <div className='Cadastro'>
      <div className="form">
        <div>
          <div>
            <label>Nome do Funcionário</label>
            <input placeholder="Seu nome" type="text" value={ form.userName } onChange={(event) => setForm({ ...form, userName: event.target.value })}></input>
          </div>
          <div>
            <label>Categoria da Ocorrência</label>
            <select value={ form.type } onChange={(event) => setForm({ ...form, type: +event.target.value })}>
              <option disabled selected value={0}>Selecione</option>
              <option value={1}>Falta de Material</option>
              <option value={2}>Falha Técnica</option>
              <option value={3}>Manutenção</option>
              <option value={4}>Falta de Ferramenta</option>
              <option value={5}>Falta de Pessoal</option>
              <option value={6}>Outros</option>
            </select>
          </div>
          <div>
            <label>Título</label>
            <input placeholder='Caso "Outros", Qual o problema?' value={ form.title }  type="text" onChange={(event) => setForm({ ...form, title: event.target.value })}></input>
          </div>
          <div>
            <label>Descrição</label>
            <input placeholder='Descreva com detalhes o ocorrido..' value={ form.description } type="text" onChange={(event) => setForm({ ...form, description: event.target.value })}></input>
          </div>
          <div>
            <label>Sugestão</label>
            <input placeholder='Tem alguma sugestão para solucionar?' value={ form.suggestions } type="text" onChange={(event) => setForm({ ...form, suggestions: event.target.value })}></input>
          </div>
          <div>
            <label>Setor</label>
            <input placeholder='Qual setor?' type="text" value={ form.sector } onChange={(event) => setForm({ ...form, sector: event.target.value })}></input>
          </div>
          <div>
            <label>Status de andamento</label>
            <input placeholder='Digite um status (opcional)' type="text" value={ form.status } onChange={(event) => setForm({ ...form, status: event.target.value })}></input>
          </div>
        </div>
        <br></br>
        <button className="button" type="submit" onClick={ () => onSubmit() }>Enviar Requisição</button>
      </div>
    </div>
  )

  //#endregion

}
