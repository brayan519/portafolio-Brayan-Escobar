import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/index.jsx';
import { Acercademi } from './components/Acercademi/acercademi.jsx';
import { Habilidades } from './components/Habilidades/habilidades.jsx';
import { Proyectos } from './components/Proyectos/proyectos.jsx';
import { Educacion } from './components/Educacion/educacion.jsx';
import  Contacto  from './components/Contacto/index.jsx';
import { Experiencia } from './components/Experiencia/experiencia.jsx'; 
import {Footer} from './components/Footer/index.jsx';
import './App.css';
import { Home } from './components/home/index.jsx';
function App() {
  return (
      <div>
        <div className="App">
          <header className="App-header">
            <Router>
              <Navbar></Navbar>
                <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/acercademi' element={<Acercademi/>} />
                  <Route path='/habilidades' element={<Habilidades/>} />
                  <Route path='/proyectos' element={<Proyectos/>} />
                  <Route path='/experiencia' element={<Experiencia/>} />
                  <Route path='/educacion' element={<Educacion/>} />
                  <Route path='/contacto' element={<Contacto/>} />
                </Routes>
            </Router>
            <Footer></Footer>
          </header>
        </div>
      </div>
  );
}
export default App;