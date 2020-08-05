import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/16636590?s=460&u=9987bcee0f4496aa45c7fcb801f02748bd03fe0a&v=4" alt="Foto professor"/>  
        <div>
          <strong>Camila Nunes</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica.
        <br/><br/>
        utilizado desde o século XVI, quando um impressor desconhecido pegou uma.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$75,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em Contato
        </button>
      </footer>
    </article>      
  )
}

export default TeacherItem;
