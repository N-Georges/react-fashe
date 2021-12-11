import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
