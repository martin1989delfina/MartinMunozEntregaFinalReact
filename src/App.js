import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import "bulma/css/bulma.css";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import { CartProvider } from './components/context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListConteiner/>}/>
          <Route path="/category/:categoryId" element={<ItemListConteiner/>}/>
          <Route path="/item/:itemId" element={<ItemDetailConteiner />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>


  );
}

export default App;
