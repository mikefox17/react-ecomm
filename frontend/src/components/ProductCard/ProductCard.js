import styles from './ProductCard.module.scss';

const ProductCard = ({ blurb, details }) => {
    console.log(details);
    const { images } = details;
    console.log(images);
    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <img
                    src='https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    alt='Boot'
                />
            </div>
            <div className={styles.cardDetails}>
                <p className={styles.productPrice}>Price: {details.price}</p>
                <p className={styles.productDescription}>{blurb.en}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ProductCard;
