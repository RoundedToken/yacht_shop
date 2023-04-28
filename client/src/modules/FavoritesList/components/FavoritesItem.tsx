import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { routeConstants } from '../../../models/enums/EConstants';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import { IFavoritesItem } from '../interfaces/IFavoritesItem';

const FavoritesItem: FC<IFavoritesItem> = ({ id, name, brand, code, price, styles, src }) => {
    return (
        <>
            <HorizontalLine colSpan={6} />
            <tr>
                <td>
                    <Link className={styles.itemName} to={routeConstants.PRODUCT_ROUTE + `/${id}`}>
                        <img src={src} alt="" width={64} height={64} />

                        {name}
                    </Link>
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
