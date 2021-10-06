import Layout from '../components/Layout';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';
import { Rating } from '@mui/material';

const Home = (props) => {
  // props get from getServerSideProps()
  const { products } = props;
  return (
    <Layout>
      <h1>Products</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                </CardActionArea>
              </NextLink>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">{product.description}</Typography>
                <Typography>
                  <Rating
                    sx={{
                      marginTop: '6px',
                      marginLeft: '-3px',
                    }}
                    name="read-only"
                    value={product.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button
                  size="small"
                  color="primary"
                  disabled={product.countInStock > 0 ? false : true}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}

// export async function getServerSideProps() {
//   const response = await fetch(`http://localhost:3000/api/products`);
//   const products = await response.json();
//   return {
//     props: {
//       products: { products },
//     },
//   };
// }
