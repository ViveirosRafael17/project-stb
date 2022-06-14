import React from 'react';
import { Header } from './Components/Header';
import { MenuPrincipal } from './Components/MenuPrincipal';
import { Cadastro } from './Components/Cadastro';
import { CadastroVeterinario } from './Components/Cadastro-Veterinario';
import { CadastroProdutor } from './Components/Cadastro-Produtor';
import { Login } from './Components/Login';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<MenuPrincipal/>}></Route>
      <Route path='/cadastro' element={<Cadastro/>}></Route>
      <Route path='/cadastro/veterinario' element={<CadastroVeterinario/>}></Route>
      <Route path='/cadastro/produtor' element={<CadastroProdutor/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  )
};