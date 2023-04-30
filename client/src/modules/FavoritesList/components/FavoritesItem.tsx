import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import ProductName from '../../../UI/ProductName/ProductName';
import ProductPic from '../../../UI/ProductPic/ProductPic';
import { IFavoritesItem } from '../interfaces/IFavoritesItem';

const FavoritesItem: FC<IFavoritesItem> = ({ id, name, brand, code, price, styles, src }) => {
    return (
        <>
            <HorizontalLine colSpan={6} />

            <tr>
                <td className={styles.itemName}>
                    <ProductPic src={src} />

                    <ProductName id={id} name={name} />
                </td>

                <td>{brand}</td>

                <td>{code}</td>

                <td>{eurFormatter.format(price)}</td>

                <td>
                    <FavoritesButton id={id} />
                </td>
            </tr>
        </>
    );
};

export default FavoritesItem;
