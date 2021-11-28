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
                <button
                    class='snipcart-add-item'
                    data-item-id={id}
                    data-item-price={details.price}
                    data-item-url='/paintings/starry-night'e
                    data-item-description='High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.'
                    data-item-image='/assets/images/starry-night.jpg'
                    data-item-name='The Starry Night'
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
