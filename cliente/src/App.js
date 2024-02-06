import logo from './logo.svg';
import './App.css';
import ListaSistemas from './ListaSistemas';
import AgregarSistemas from './AgregarSistemas';
import EditarSistema from './EditarSistema';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <h1>Catálogo de Sistemas de Información - Alcaldía de Medellín</h1>

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
