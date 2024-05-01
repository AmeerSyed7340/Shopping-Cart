import { useEffect } from "react";
import CardComp from "./CardComp";
import { Grid } from "@mui/material";
import { useCart } from "../contexts/CartContext"; //import the useCart hook from the CartContext

export const Products = ({allProd}) => {
  //const [products, setProducts] = useState([]);
console.log(allProd);

  //access context values
  const { total, setTotal, products, setProducts } = useCart();

  useEffect(() => {
    fetch(allProd)
      .then((res) => res.json())
      .then((json) => {
        const productsWithCount = json.map((product) => ({
          ...product,
          count: 0,
        }));
        setProducts(productsWithCount);
      });
  }, [allProd]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ margin: "auto", maxWidth: 1280, width: "100%" }}
    >
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <CardComp product={product} total={total} setTotal={setTotal}/>
        </Grid>
      ))}
    </Grid>
  );
};
