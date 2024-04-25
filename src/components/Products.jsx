import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  Collapse,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Products = () => {
  const [products, setProducts] = useState([]);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <Box sx={{ display: "flex", flexFlow: "wrap" }}>
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{ minWidth: 275, maxWidth: 275, margin: 2 }}
        >
          <CardHeader title={product.title} subheader={product.category} sx={{height: 150}}/>
          <CardMedia
            component="img"
            height="194"
            image={product.image}
            alt=""
          />

          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="success" sx={{ width: "100%" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ADD - ${product.price}
              </Typography>
            </Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
};
