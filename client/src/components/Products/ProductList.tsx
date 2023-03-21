import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TProductListId } from '../../models/TProductListId';
import { RootState } from '../../redux/store';
import { navProductListApi } from '../../services/navProductListService';
import ProductListItem from './ProductListItem';

const ProductList = () => {
    const params = useParams<TProductListId>();
    const lang = useSelector((state: RootState) => state.langSlice.lang);

    const {
        data: productList,
        isFetching,
        error,
    } = navProductListApi.useFetchProductListQuery({
        subr: Number(params.productListId),
        brand: '',
        fw: '',
        inSubr: '',
        ip: '',
        lang: lang,
    });

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {productList &&
                !isFetching &&
                productList.map((product) => (
                    <ProductListItem key={product.id} id={product.id} src={product.src}>
                        {product.name}
                    </ProductListItem>
                ))}
        </div>
    );
};

export default ProductList;
