import React from 'react';
import Header from '../components/Header';
import './Main.scss';

function Main(){
  return (
    <div id="wrap">
      <Header/>
      <main id="main">
        <section id="mainCont">
            <div className="mainTxet">
                <div>WE PROVIDE</div>
                <div>VISUAL CODING</div>
                <div className="white">SOLUTIONS</div>
                <div>FOR YOU WEBS</div>
            </div>
        </section>
      </main>
    </div>
  )
}

export default Main;