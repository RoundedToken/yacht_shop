import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IProductDetail } from '../interfaces/IProductDetail';

const ProductDetail: FC<IProductDetail> = ({ styles, code, inStock, inStockCount }) => {
    return (
        <div className={styles.descriptionDetail}>
            <div className={styles.descriptionItem}>
                <div className={styles.itemTitle}>
                    {' '}
                    <Text rus="Код:" eng="Code:" est="Kood:" />
                </div>

                {code}
            </div>

            <div className={styles.descriptionItem}>
                <div className={styles.itemTitle}>
                    <Text rus="Есть в наличии:" eng="Are available:" est="On saadaval" />
                </div>

                {inStock ? (
                    <Text rus="Да" eng="Yes" est="Jah" />
                ) : (
                    <Text rus="Нет" eng="No" est="Ei" />
                )}
            </div>

            <div className={styles.descriptionItem}>
                <div className={styles.itemTitle}>
                    <Text rus="Количество в наличии:" eng="Quantity in stock:" est="Kogus laos:" />
                </div>

                {inStockCount}
            </div>
        </div>
    );
};

export default ProductDetail;
