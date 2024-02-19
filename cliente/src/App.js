import logo from './logo.svg';
import './App.css';
import ListaSistemas from './ListaSistemas';
import AgregarSistemas from './AgregarSistemas';
import EditarSistema from './EditarSistema';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      

                    <nav className="navbar navbar-expand-lg  bg-body-tertiary">
                <div className="container">
                  <a className="navbar-brand" href="#">Catálogo de Sistemas de Información - Alcaldía de Medellín</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="agregarsistema">Agregar Sistema de Información</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </nav>

                  

      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<ListaSistemas/>} exact> </Route>
          <Route path = '/agregarsistema' element = {<AgregarSistemas/>} exact> </Route>
          <Route path = '/editarsistema' element = {<EditarSistema/>} exact> </Route>

        </Routes>
      
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
