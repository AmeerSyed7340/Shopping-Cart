import { useState } from 'react';
import Homepage from './components/Homepage'
import {Link} from "react-router-dom";

function App() {
const [cartItems, setCartItems] = useState([]);

function handleAddToCart(item){
  setCartItems(prevItems => [...prevItems, item]);
}

  return (
    <div>
      <h1>Hello from the main page: </h1>
      <Link to="homepage" state={{onItemAddToCart: handleAddToCart}}>Homepage</Link>
    </div>
  )
}

export default App
