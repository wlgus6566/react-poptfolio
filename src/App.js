import React from 'react';

import Main from './routes/Main';
import About from './routes/About';
import Reference from './routes/Reference';
import Youtube from './routes/Youtube';
import Contact from './routes/Contact';
import Port from './routes/Port';
// import ReferDetail from './routes/ReferDetail';

import { HashRouter, Route } from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/reference" component={Reference} />
      <Route path="/youtube" component={Youtube} />
      <Route path="/contact" component={Contact} />
      <Route path="/port" component={Port} />
      {/* <Route path="/reference-datail" component={ReferDetail} /> */}
    </HashRouter>
  )
}
export default App;
