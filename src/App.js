import logo from './logo.svg';
import './App.css';
import AddWork from './components/AddWork';
import SearchWork from './components/SearchWork';
import DeleteWork from './components/DeleteWork';
import ViewTodo from './components/ViewWork';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddWork/>}/>
    <Route path='/search' element={<SearchWork/>}/>
    <Route path='/delete' element={<DeleteWork/>}/>
    <Route path='/view' element={<ViewTodo/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
