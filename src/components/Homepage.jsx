import { useEffect, useState } from "react";
import ShoppingCart from "./ShoppingCart";
import '../styles/Homepage.css';
import { Outlet, Link } from "react-router-dom";

const Homepage = () => {
    const [object, setObj] = useState([]);

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
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
    )
}

export default Homepage;