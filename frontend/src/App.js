import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import sanityClient from './client';
import styles from './styles/Home.module.scss';
import Container from './components/Container/Container';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Footer from './components/Footer/Footer';

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

    if (!products) return null;

    return (
        <div className='App'>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route exact path='/' element={<ProductList />} />
                        <Route
                            path='/products/:id'
                            element={<ProductDetail />}
                        />
                    </Routes>
                </Container>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
