import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/products" element={<Products/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
