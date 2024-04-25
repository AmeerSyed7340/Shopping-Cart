import { useEffect, useState } from "react";
import CardComp from "./Card";
import {
  Grid,
  
} from "@mui/material";



export const Products = () => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} >
          <CardComp product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
