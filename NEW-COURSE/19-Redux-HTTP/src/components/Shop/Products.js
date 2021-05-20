import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
            id ='123'
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
          <ProductItem
              id ='456'
              title='Test2'
              price={2}
              description='This is a second product - amazing!'
          />
      </ul>
    </section>
  );
};

export default Products;
