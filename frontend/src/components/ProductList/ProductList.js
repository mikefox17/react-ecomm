import { useState, useEffect } from 'react';
import sanityClient from '../../client';
import styles from './ProductList.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState(null);

    const getProducts = async () => {
        const res = await sanityClient.fetch(`
        *[_type == "product"]{
            _id,
            blurb{
            en
          },
          defaultProductVariant{
            images,
            price
            
          },
            
          }
        `);

        setProducts(res);
    };

    useEffect(() => {
        getProducts();
    }, []);

    if (!products) return null;
    return (
        <div>
            <h1>Hello World</h1>

            <div className={styles.productsGrid}>
                {products.map(product => {
                    const { blurb, defaultProductVariant: details } = product;

                    return (
                        <ProductCard
                            key={product._id}
                            blurb={blurb}
                            details={details}
                            id={product._id}
                        ></ProductCard>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
