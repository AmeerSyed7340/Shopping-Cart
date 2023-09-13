import { useEffect, useState } from "react";
import '../styles/Homepage.css';

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
            {object.map(item => (
                <div key={item.id} className="card">
                    <img src={item.image} alt="clothing-img" />
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <p>Rating: {item.rating.rate}</p>
                </div>
            ))}
        </div>
    )
}

export default Homepage;