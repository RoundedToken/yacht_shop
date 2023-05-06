import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import ProductName from '../../../UI/ProductName/ProductName';
import ProductPic from '../../../UI/ProductPic/ProductPic';
import { IFavoritesItem } from '../interfaces/IFavoritesItem';

const FavoritesItem: FC<IFavoritesItem> = ({ product, styles }) => {
    return (
        <>
            <HorizontalLine colSpan={6} />

            <tr>
                <td className={styles.itemName}>
                    <ProductPic src={product.src} />

                    <ProductName id={product.id} name={product.name} />
                </td>

                <td>{product.brand}</td>

                <td>{product.code}</td>

                <td>{eurFormatter.format(product.price)}</td>

                <td>
                    <FavoritesButton id={product.id} />
                </td>
            </tr>
        </>
    );
};

export default FavoritesItem;
