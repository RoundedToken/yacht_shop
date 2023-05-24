import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { TId } from '../../../models/types/TId';
import { webProductInfoApi } from '../../../services/webProductInfo';
import Text from '../../../UI/Text/Text';
import { IProductInfo } from '../interfaces/IProductInfo';

const ProductInfo: FC<IProductInfo> = ({ styles }) => {
    const id = Number(useParams<TId>().id);
    const {
        data: productInfo,
        isFetching,
        error,
    } = webProductInfoApi.useFetchProductInfoQuery({ tovar: id });

    if (isFetching)
        return (
            <div className={styles.infoContainer}>
                <>
                    <div className={styles.infoTitle}>
                        <Text
                            rus="Описание товара"
                            eng="Product description"
                            est="Tootekirjeldus"
                        />
                    </div>
                    <Skeleton style={{ height: '150px' }} containerClassName="skeleton" />
                </>
            </div>
        );

    return (
        <div className={styles.infoContainer}>
            {error && <h1>Error!</h1>}
            {productInfo && (
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
                            <div className={styles.infoItem} key={i}>
                                <div
                                    className={styles.infoItemTitle}
                                    dangerouslySetInnerHTML={{ __html: value[0] }}
                                ></div>

                                <div
                                    className={styles.infoItemContent}
                                    dangerouslySetInnerHTML={{ __html: value[1] }}
                                ></div>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default ProductInfo;
