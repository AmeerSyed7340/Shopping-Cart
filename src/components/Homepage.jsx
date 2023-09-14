import { useContext, useEffect, useState } from "react";
import '../styles/Homepage.css';
import { Outlet, Link } from "react-router-dom";
import CartContext from "../CartContext";

const Homepage = () => {
    const [object, setObj] = useState([]);
    const {onItemAddToCart} = useContext(CartContext);

    //useEffect hook to fetch during mount
    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch('https://fakestoreapi.com/products');
            let data = await response.json();
            return data;
        }
        fetchData().then(array => {
            setObj(array);
        })
    }, []);

    function handleButton(item){
        onItemAddToCart(item);
    }

    return (
        <div className="container">
            <Link to="shoppingcart">Shopping Cart</Link>
            <Outlet />
            {object.map(item => (
                <div key={item.id} className="card">
                    <img src={item.image} alt="clothing-img" />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <p>Rating: {item.rating.rate}</p>
                    <button onClick={() => handleButton(item)}>Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default Homepage;