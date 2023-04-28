import React, { FC } from 'react';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IProductListItem } from '../interfaces/IProductListItem';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import ProductName from './ProductName';
import { eurFormatter } from '../../../helpers/eurFormatter';
import ProductInStock from './ProductInStock';
import ProductCart from './ProductCart';

const ProductListItem: FC<IProductListItem> = ({ product, styles }) => {
    return (
        <>
            <HorizontalLine colSpan={8} />
            <tr>
                <td className={styles.productName}>
                    <ProductName id={product.id} src={product.src} name={product.name} />
                </td>

                <td>{product.brand}</td>

                <td>{product.code}</td>

                <td>{eurFormatter.format(product.price)}</td>

                <td className={styles.productInStock}>
                    <ProductInStock styles={styles} inStock={product.inStock} />
                </td>

                <td>
                    <FavoritesButton id={product.id} />
                </td>

                <td className={styles.productCart}>
                    <ProductCart styles={styles} product={product} />
                </td>

                <td>
                    <CountControl id={product.id} />
                </td>
            </tr>
        </>
    );
};

export default ProductListItem;
