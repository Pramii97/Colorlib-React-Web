import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>

          <Route path='/aboutus'>
            <About />
          </Route>

          <Route path='/services'>
            <Services />
          </Route>

          <Route path='/'>
            <Home /> 
          </Route>
          
        </Switch>

        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
