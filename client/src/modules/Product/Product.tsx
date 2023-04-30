import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { eurFormatter } from '../../helpers/eurFormatter';
import { TId } from '../../models/types/TId';
import { RootState } from '../../redux/store';
import { navProductApi } from '../../services/navProductService';
import ProductNotFound from './components/ProductNotFound';

const Product = () => {
    const id = Number(useParams<TId>().id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data: product, isFetching, error } = navProductApi.useFetchProductQuery({ id, lang });

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {product &&
                !isFetching &&
                (product.name ? (
                    <div>
                        <div>Name: {product.name}</div>
                        <div>Brand: {product.brand}</div>
                        <img src={product.brandLogo} alt="" width={64} height={64} />
                        <div>Code: {product.code}</div>
                        <div>Price: {eurFormatter.format(product.price)}</div>
                        <div>In stock count: {product.inStockCount}</div>
                    </div>
                ) : (
                    <ProductNotFound />
                ))}
        </div>
    );
};

export default Product;
