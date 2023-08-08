import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextProvider from './notes-context';
import Create from './components/Create';
import Home from './components/Home'
import Edit from './components/Edit';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>


  );
}

export default App;
