import React, { FC } from 'react';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IProductListItem } from '../interfaces/IProductListItem';
import HorizontalLine from '../../../UI/HorizontalLine/HorizontalLine';
import { eurFormatter } from '../../../helpers/eurFormatter';
import ProductInStock from './ProductInStock';
import ProductPic from '../../../UI/ProductPic/ProductPic';
import ProductName from '../../../UI/ProductName/ProductName';
import CartButton from '../../../UI/CartButton/ProductCart';

const ProductListItem: FC<IProductListItem> = ({ product, styles }) => {
    return (
        <>
            <HorizontalLine colSpan={8} />
            <tr>
                <td className={styles.productName}>
                    <div className={styles.pic}>
                        <ProductPic src={product.src} />
                    </div>

                    <ProductName id={product.id} name={product.name} />
                </td>

                <td>{product.brand}</td>

                <td>{product.code}</td>

                <td>{eurFormatter.format(product.price)}</td>

                <td className={styles.productInStock}>
                    <ProductInStock type="pic" styles={styles} inStock={product.inStock} />
                </td>

                <td>
                    <FavoritesButton id={product.id} />
                </td>

                <td className={styles.productCart}>
                    <CartButton id={product.id} brand={product.brand} price={product.price} />
                </td>

                <td>
                    <CountControl id={product.id} />
                </td>
            </tr>
        </>
    );
};

export default ProductListItem;
