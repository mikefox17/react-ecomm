import { useEffect, useState } from 'react';
import styles from './ProductDetail.module.scss';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProductDetail = async () => {
        const res = await sanityClient.fetch(`*[_id == "${id}"]{
            _id,
            title,
            blurb{
            en
            },

    }`);
        setProduct(res[0]);
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    console.log(product);

    return <div>{product.title}</div>;
};

export default ProductDetail;
