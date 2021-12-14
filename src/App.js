import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Header from './components/Header'
import Footer from './components/Footer';
import LikePage from './Pages/LikePage';
import PanierPage from './Pages/PanierPage';
import ProductDetail from './Pages/ProductDetail';

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
          <Route path='/like' element={<LikePage/>}/>
          <Route path='/panier' element={<PanierPage/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
