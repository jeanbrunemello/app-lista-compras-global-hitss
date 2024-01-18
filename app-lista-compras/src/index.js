import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/themes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Listas from './pages/listas/listas';
import Home from './pages/home/home';
import Header from './components/header/header';
import ProdutoCard from './components/produtosCards/produtoCard';
import Produtos from './pages/produtos/produtos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <header className="App-header">
          <Header></Header>
        </header>
        <main>
          <Routes>
            <Route path="/listas" element={<Listas />}></Route>
            <Route path="/listas/:id" element={<Produtos />} ></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/" element={<App />} ></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
