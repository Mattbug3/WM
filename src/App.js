import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/footer/Footer';
import Blog from './pages/Blog';
import About from './pages/About';
import BestSellers from './pages/BestSellers';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop /> } />
          <Route path='/shop' element={<ShopCategory />}>
            <Route path=':productGender' element={<ShopCategory />}>
              <Route path=':productCategory' element={<ShopCategory />} />
            </Route>
          </Route>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/about' element={<About />} />
          <Route path='/product' element={ <Product /> }>
            <Route path=':productId' element={ <Product /> } />
          </Route>
          <Route path='/best-sellers' element={<BestSellers />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='success' element={<ThankYou />}/>
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/login' element={ <LoginSignup /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
