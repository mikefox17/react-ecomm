import { useState, useEffect } from 'react';
import sanityClient from './client';
import styles from './styles/Home.module.scss';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
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
    console.log(products);

    if (!products) return null;

    return (
        <div className='App'>
            <Header></Header>
            <Container>
                <div>
                    <h1>Hello World</h1>

                    <div className={styles.productsGrid}>
                        {products.map(product => {
                            const { blurb, defaultProductVariant: details } =
                                product;
                            console.log(blurb, details);

                            return (
                                <ProductCard
                                    key={product._id}
                                    blurb={blurb}
                                    details={details}
                                ></ProductCard>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default App;
