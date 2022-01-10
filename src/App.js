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
import Data from './Data';
import ProductDetailPage from './Pages/ProductDetailPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage data={Data}/>}/>
          <Route path='/product' element={<ProductPage data={Data}/>}/>
          <Route path='/about' element={<AboutPage data={Data}/>}/>
          <Route path='/contact' element={<ContactPage data={Data}/>}/>
          <Route path='/like' element={<LikePage data={Data}/>}/>
          <Route path='/panier' element={<PanierPage data={Data}/>}/>
          <Route path='/product/:id' element={<ProductDetailPage data={Data}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
