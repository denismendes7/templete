import React from "react";
import "./App.scss";

import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>

                
                <Route exact path="/cronograma" component={Cronograma} />
                <Route exact path="/prova" component={Prova} />
                <Route exact path="/avaliacao" component={Avaliacao} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Cronograma() {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Seja bem-vindo à Educação a Distância!</h2>
         <h4> Nesse semestre, você terá uma ou mais disciplinas a distância,
          dependendo da sua matrícula, né?</h4>
          <h4>Mas não se preocupe,
          estamos aqui para ajudá-lo no que for preciso e muito felizes por termos você conosco.</h4>
         <h4>Juntos construiremos um novo semestre.</h4>
      </div>
    </div>
  );
}

function Prova() {
  return (
    <div className="container">
      <div className="wrapper">
      <h2>Disciplina Leitura e Produção Textual EAD</h2>
        <h4>Algumas informações importantes para o nosso início de semestre:</h4>
        <h4> 1 - O Início das nossas aulas será 09 de agosto, aqui em seu ambiente virtual.</h4>
        <h4> 2 - Durante o semestre, temos 4 unidades na sua disciplina a distância. Lembre-se sempre de cumprir os prazos de cada unidade.</h4>

        <h4>3 - Antes de iniciar a unidade 1,
          dê uma olhada no Plano de Estudos da disciplina para saber como
          é a metodologia a distância e todas as datas de atividades e provas.</h4>
          <h4>E sempre que houver dúvidas, nos procure!</h4>
      </div>
    </div>

  );
}

function Avaliacao() {
  return (
    <div className="container">
      <div className="wrapper">

        <h2>Você pode entrar em contato conosco por:</h2>

        <h4>- Via chat online (aqui em seu ambiente virtual, ícone verde no lado direito).</h4>
        <h4>- Mensagem pelo “Fale Conosco”, aqui também no ambiente virtual.</h4>
        <h4>- E-mail: ead@unifametro.edu.br</h4>
        <h4>- Telefone: 3022-7055</h4>
        <h4>- Presencialmente na sala de Atendimento e Tutoria EaD
          que está localizada no Campi Carneiro da Cunha, 7º andar,
        <h4>nos dias de Segunda, Quarta e Sexta, 8h às 13h , Terça e Quinta de 15h30 às 20h30.</h4>
        </h4>
      </div>
    </div>

  );
}


export default App;
