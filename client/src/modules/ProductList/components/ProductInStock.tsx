import React, { FC } from 'react';
import closeImg from '../../../assets/images/close.png';
import checkImg from '../../../assets/images/check.png';
import { IProductInStock } from '../interfaces/IProductInStock';
import Text from '../../../UI/Text/Text';

const ProductInStock: FC<IProductInStock> = ({ styles, inStock, type }) => {
    return inStock ? (
        type === 'pic' ? (
            <img className={styles.inStockCheckImg} src={checkImg} alt="" />
        ) : (
            <Text rus="Да" eng="Yes" est="Jah" />
        )
    ) : type === 'pic' ? (
        <img className={styles.inStockCloseImg} src={closeImg} alt="" />
    ) : (
        <Text rus="Нет" eng="No" est="Ei" />
    );
};

export default ProductInStock;
