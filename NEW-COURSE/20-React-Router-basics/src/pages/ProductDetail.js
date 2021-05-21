import React from 'react';
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    console.log(params);

    return (
        <section>
            <h1>{params.productId}</h1>
            <Link to='/products'>Go Back to Products</Link>
        </section>
    )
}

export default ProductDetail;
