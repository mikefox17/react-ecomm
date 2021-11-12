import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';
import sanityClient from '../../client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

const ProductCard = ({ blurb, details, id }) => {
    const { images } = details;
    const {
        asset: { _ref: imgSRC },
    } = images[0];

    return (
        <div className={styles.productCard}>
            <Link to={`/products/${id}`}>
                {' '}
                <div className={styles.productImage}>
                    <img src={urlFor(imgSRC).width(200).url()} alt='Boot' />
                </div>
            </Link>

            <div className={styles.cardDetails}>
                <p className={styles.productPrice}>Price: {details.price}</p>
                <p className={styles.productDescription}>{blurb.en}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductCard;
