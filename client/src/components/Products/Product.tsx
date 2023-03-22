import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TProductId } from '../../models/TProductId';
import { RootState } from '../../redux/store';
import { navProductApi } from '../../services/navProductService';

const Product = () => {
    const params = useParams<TProductId>();
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    const {
        data: product,
        isFetching,
        error,
    } = navProductApi.useFetchProductQuery({ tovar: Number(params.productId), lang: lang });

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {product && !isFetching && (
                <div>
                    <div>Name: {product.name}</div>
                    <div>Brand: {product.brand}</div>
                    <div>Code: {product.code}</div>
                    <div>Price: {product.price}</div>
                    <div>In stock count: {product.inStockCount}</div>
                </div>
            )}
        </div>
    );
};

export default Product;
