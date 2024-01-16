import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import InputBox from './components/input-box/input-box'
import cores from './assets/cores.css'
import './App.css';
import NavMenu from './components/navMenu/navMenu';
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Home></Home>
        <InputBox></InputBox>
      </header>
    </div>
  );
}

export default App;
