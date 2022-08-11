import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importamos los compontentes
import Login from './components/login';
import ShowUsers from './components/ShowUsers';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/showUsers' element={<ShowUsers/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
