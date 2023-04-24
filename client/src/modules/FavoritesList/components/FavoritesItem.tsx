import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IFavoritesItem } from '../interfaces/IFavoritesItem';

const FavoritesItem: FC<IFavoritesItem> = ({ id, name, brand, code, price, styles, src }) => {
    const formatter = new Intl.NumberFormat('et', {
        style: 'currency',
        currency: 'EUR',
    });

    return (
        <>
            <tr>
                <td colSpan={6}>
                    <hr />
                </td>
            </tr>
            <tr>
                <td>
                    <Link className={styles.itemName} to={routeConstants.PRODUCT_ROUTE + `/${id}`}>
                        <img src={src} alt="" width={64} height={64} />
                        {name}
                    </Link>
                </td>
                <td>{brand}</td>
                <td>{code}</td>
                <td>{formatter.format(price)}</td>
                <td>
                    <FavoritesButton id={id} />
                </td>
            </tr>
        </>
    );
};

export default FavoritesItem;
