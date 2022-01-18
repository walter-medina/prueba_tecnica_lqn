import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Layouts from 'layouts/Layouts';
import 'styles/styles.css'
import Index from "pages";
import Parte1_b from "pages/parte1_b";
import Parte2 from 'pages/parte2';

function App() { 
  return (
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Layouts />}>          
        <Route path='' element={<Index/>}/>
        <Route path='/parte1b' element={<Parte1_b/>}/>
        <Route path='/parte2' element={<Parte2/>}/>

      </Route>
       
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
