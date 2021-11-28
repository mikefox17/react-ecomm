import { useEffect, useState } from 'react';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProductDetail = async () => {
        const res = await sanityClient.fetch(`*[_id == "${id}"]{
            _id,
            title,
            blurb{
            en,
        },
        body{
            en
        },
           
            defaultProductVariant{
                images,
                price
                
              },

    }`);
        setProduct(res[0]);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    console.log(product);

    if (!product.title) return null;

    const { defaultProductVariant: details = { images: [] } } = product;
    const imgSRC = details.images[0].asset._ref;
    console.log(details);

    return (
        <div>
            <div className={styles.details}>
                <img src={urlFor(imgSRC)} alt='' />
                <button>ADD TO CART</button>
                <div className={styles.details}>
                    <h1>{product.title}</h1>
                    <p>{product.blurb.en}</p>
                    <p className={styles.price}>$ {details.price}</p>
                </div>
            </div>{' '}
        </div>
    );
};

export default ProductDetail;
