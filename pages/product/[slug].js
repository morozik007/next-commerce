import React, { useContext } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import db from '../../utils/db';
import useStyles from '../../utils/styles';
import Product from '../../models/Product';
import { Store } from '../../utils/Store';
import {
  Button,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import { Alert } from '@mui/material';

const ProductScreen = (props) => {
  const { dispatch } = useContext(Store);
  const { product } = props;
  const classes = useStyles();
  // const route = useRouter();
  // const { slug } = route.query;
  // const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not found</div>;
  }

  const addToCartHandler = () => {
    if (product.countInStock <= 0) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to products</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={6} xs={12}>
          <List>
            <ListItem>
              <Typography variant="h1" component="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category: {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Brand: {product.brand}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Description: {product.description}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Price: ${product.price}</Typography>
            </ListItem>
            <ListItem>
              <Alert severity={product.countInStock > 0 ? 'success' : 'error'}>
                {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
              </Alert>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                disabled={product.countInStock > 0 ? false : true}
                onClick={addToCartHandler}
              >
                Add to cart
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
