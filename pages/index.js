import Layout from '../components/Layout';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import db from '../utils/db';
import Product from '../models/Product';

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
              </CardContent>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
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
