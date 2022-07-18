import React from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import {BrowserRouter,
        Routes,
        Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" />
    </Routes>
    <div className="app">
      <Header />
      <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;
