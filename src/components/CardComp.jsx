import React, { useEffect } from "react";
import {
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
import { useState } from "react";

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

/*----------------------------------------
       Card component starts here
----------------------------------------*/

const CardComp = ({ product, total, setTotal }) => {
  const [expanded, setExpanded] = useState(false);

  //to add to cart
  const handleButton = (product) => {
    console.log(product.title);
    product.count++;
    setTotal((prevTotal) => prevTotal + 1);
    console.log("count", product.count);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        title={product.title}
        subheader={product.category}
        sx={{ height: 150, alignItems: "flex-start" }}
      />
      <CardMedia
        component="img"
        image={product.image}
        alt=""
        height={250}
        sx={{ objectFit: "contain" }}
      />

      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="success"
          sx={{ width: "100%" }}
          onClick={() => handleButton(product)}
        >
          {/* <Typography variant="h6" sx={{"overflow-wrap": "normal"}}>
                  ADD TO BAG - ${product.price}
                </Typography> */}
          ADD TO BAG - ${product.price}
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
  );
};

export default CardComp;
