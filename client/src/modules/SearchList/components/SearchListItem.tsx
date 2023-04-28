import React, { FC } from 'react';
import { ISearchListItem } from '../interfaces/ISearchListItem';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import SearchProductName from './SearchProductName';
import SearchInStock from './SearchInStock';
import { eurFormatter } from '../../../helpers/eurFormatter';
import SearchProductCart from './SearchProductCart';

const SearchListItem: FC<ISearchListItem> = ({ product, styles }) => {
    return (
        <>
            <HorizontalLine colSpan={8} />

            <tr>
                <td className={styles.productName}>
                    <SearchProductName id={product.id} src={product.src} name={product.name} />
                </td>

                <td>{product.brand}</td>

                <td>{product.code}</td>

                <td>{eurFormatter.format(product.price)}</td>

                <td className={styles.productInStock}>
                    <SearchInStock styles={styles} inStock={product.inStock} />
                </td>

                <td>
                    <FavoritesButton id={product.id} />
                </td>

                <td className={styles.productCart}>
                    <SearchProductCart product={product} styles={styles} />
                </td>

                <td>
                    <CountControl id={product.id} />
                </td>
            </tr>
        </>
    );
};

export default SearchListItem;
