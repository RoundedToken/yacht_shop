import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TId } from '../../../models/types/TId';
import { webProductInfoApi } from '../../../services/webProductInfo';
import Text from '../../../UI/Text/Text';

export interface IProductInfo {
    styles: {
        readonly [key: string]: string;
    };
}

const ProductInfo: FC<IProductInfo> = ({ styles }) => {
    const id = Number(useParams<TId>().id);
    const {
        data: productInfo,
        isFetching,
        error,
    } = webProductInfoApi.useFetchProductInfoQuery({ tovar: id });

    return (
        <div className={styles.infoContainer}>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {productInfo && !isFetching && (
                <>
                    <div className={styles.infoTitle}>
                        <Text
                            rus="Описание товара"
                            eng="Product description"
                            est="Tootekirjeldus"
                        />
                    </div>
                    {productInfo.map((value, i) => {
                        return (
                            <div key={i}>
                                {value.map((param, i) => (
                                    <div key={i} dangerouslySetInnerHTML={{ __html: param }}></div>
                                ))}{' '}
                                <br />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ProductInfo;
