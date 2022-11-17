
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarUsuarios from './AgregarUsuarios';
import EditarUsuario from './EditarUsuario';

// para utilizar los path es necesario instalar el reach router nmp install react-router-dom
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">Consultorio </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio </a>
        </li>
        
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="agregarusuarios">Agregar Paciente</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
      
      







      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaUsuarios/>} exact></Route>
        <Route path='/agregarusuarios' element={ <AgregarUsuarios/> }exact></Route>
        <Route path='/editarusuarios/:idPaciente' element={ <EditarUsuario/>} exact></Route>
      </Routes>
      </BrowserRouter>

      
     
    
  
  </div>
 
  );  
}

export default App;
