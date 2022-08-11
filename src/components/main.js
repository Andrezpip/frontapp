import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Importamos los compontentes
import ShowUsers from './ShowUsers';
import CreateUser from './CreateUser';
import EditUser from './EditUser';

function Main() {
  return (
    <div className="Main">
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowUsers/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default Main;