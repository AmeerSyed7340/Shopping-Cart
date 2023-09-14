import { useEffect, useState } from 'react';
import Homepage from './components/Homepage'
import ShoppingCart from './components/ShoppingCart';
import CartContext from './CartContext';
import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  function handleAddToCart(item) {
    setCartItems(prevItems => [...prevItems, item]);
  }

  return (
    <CartContext.Provider value = {{onItemAddToCart:handleAddToCart}}>
      <div>
        <h1>Hello from the main page: </h1>
        <Link to="homepage">Homepage</Link>

        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/homepage/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </CartContext.Provider>
  )
}

export default App
