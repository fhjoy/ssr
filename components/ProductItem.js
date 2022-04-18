import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  ListItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import NextLink from "next/link";
import Rating from "@material-ui/lab/Rating";
import useStyles from "../utils/styles";

export default function ProductItem({ product, addToCartHandler }) {
  const classes = useStyles();
  return (
    <Card>
      <NextLink href={`/product/${product.slug}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.image}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <ListItem className={classes.rating}>
              <Rating
                className={classes.ratingIcon}
                value={product.rating}
                readOnly
              ></Rating>
              <Link href="#reviews">
                <Typography>({product.numReviews} reviews)</Typography>
              </Link>
            </ListItem>
            <Typography>€{product.price}</Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        {product.countInStock === 0 ? (
          <Button disabled>Out of stock</Button>
        ) : (
          <Button
            className={classes.addToCardButton}
            variant="contained"
            size="small"
            color="primary"
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
