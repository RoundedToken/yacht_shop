import React, { FC } from 'react';
import { ICartProductList } from '../interfaces/ICartProductList';
import CartProduct from './CartProduct';
import ProductListHeader from './ProductListHeader';

const CartProductList: FC<ICartProductList> = ({ styles, productList }) => {
    return (
        <table className={styles.productList}>
            <ProductListHeader styles={styles} />

            <tbody>
                {productList?.map((product) => (
                    <CartProduct
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        src={product.src}
                        price={product.price}
                        styles={styles}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default CartProductList;
