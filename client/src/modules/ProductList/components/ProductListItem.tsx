import React, { FC } from 'react';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import { IProductListItem } from '../interfaces/IProductListItem';
import { eurFormatter } from '../../../helpers/eurFormatter';
import ProductPic from '../../../UI/ProductPic/ProductPic';
import ProductName from '../../../UI/ProductName/ProductName';
import CartButton from '../../../UI/CartButton/CartButton';

const ProductListItem: FC<IProductListItem> = ({ product, styles }) => {
    return (
        <tr>
            <td className={styles.productName}>
                <div className={styles.productNameContainer}>
                    <div className={styles.pic}>
                        <ProductPic src={product.src} />
                    </div>

                    <ProductName id={product.id} name={product.name} />
                </div>
            </td>

            <td className={styles.brand}>{product.brand}</td>

            <td className={styles.code}>{product.code}</td>

            <td className={styles.inStock}>
                {product.inStock ? (
                    <div className={styles.inStockTrue}></div>
                ) : (
                    <div className={styles.inStockFalse}></div>
                )}
            </td>

            <td className={styles.price}>{eurFormatter.format(product.price)}</td>

            <td>
                <div className={styles.productCart}>
                    <CartButton
                        id={product.id}
                        brand={product.brand}
                        price={product.price}
                        isDecimals={product.isDecimals}
                    />

                    <CountControl id={product.id} isDecimals={product.isDecimals} />

                    <FavoritesButton id={product.id} />
                </div>
            </td>
        </tr>
    );
};

export default ProductListItem;
