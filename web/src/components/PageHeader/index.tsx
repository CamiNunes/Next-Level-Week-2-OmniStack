import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './style.css';

//declarando as propriedades do meu componente.
//? com esse sinal o campo não é obrigatório.
interface PageHeaderProps{
  title: string;
}

//componente escrito em forma de função
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) =>  {
  return(
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/"><img src={backIcon} alt="Voltar"/></Link>
        <img src={logoImg} alt="Proffy"/>
      </div>
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>

  );
}

export default PageHeader