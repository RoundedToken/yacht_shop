import React, { FC } from 'react';
import { ICartProductList } from '../interfaces/ICartProductList';
import CartProduct from './CartProduct';
import ProductListHeader from './ProductListHeader';

const CartProductList: FC<ICartProductList> = ({ styles, productList, data }) => {
    return (
        <table className={styles.productList}>
            <ProductListHeader styles={styles} />

            <tbody>
                {productList?.map((product) => (
                    <CartProduct
                        key={product.id}
                        id={product.id}
                        name={data.find((item) => item.id === product.id)?.name || ''}
                        src={data.find((item) => item.id === product.id)?.src || ''}
                        price={product.price}
                        styles={styles}
                        count={product.count}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default CartProductList;
