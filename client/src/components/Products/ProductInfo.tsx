import React from 'react';
import { useParams } from 'react-router-dom';
import { TProductId } from '../../models/TProductId';
import { webProductInfoApi } from '../../services/webProductInfo';

const ProductInfo = () => {
    const params = useParams<TProductId>();
    const {
        data: productInfo,
        isFetching,
        error,
    } = webProductInfoApi.useFetchProductInfoQuery({ tovar: Number(params.productId) });

    return (
        <div>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {productInfo &&
                !isFetching &&
                productInfo.map((value, i) => {
                    return (
                        <div key={i}>
                            {value.map((param, i) => (
                                <div key={i} dangerouslySetInnerHTML={{ __html: param }}></div>
                            ))}{' '}
                            <br />
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductInfo;
