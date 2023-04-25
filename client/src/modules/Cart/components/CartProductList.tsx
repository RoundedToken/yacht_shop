import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ICartProductList } from '../interfaces/ICartProductList';
import CartProduct from './CartProduct';
import ProductListHeader from './ProductListHeader';

const CartProductList: FC<ICartProductList> = ({ styles, productList, data }) => {
    const brands = useSelector((state: RootState) => state.navSlice.brands);

    return (
        <table className={styles.productList}>
            <ProductListHeader styles={styles} />

            <tbody>
                {productList
                    ?.filter((product) =>
                        brands.length === 0
                            ? true
                            : [...brands].includes(
                                  (
                                      data.find((item) => item.id === product.id)?.brand || ''
                                  ).toLowerCase()
                              )
                    )
                    .map((product) => (
                        <CartProduct
                            key={product.id}
                            id={product.id}
                            name={data.find((item) => item.id === product.id)?.name || ''}
                            src={data.find((item) => item.id === product.id)?.src || ''}
                            price={product.price}
                            styles={styles}
                            count={product.count}
                            brand={data.find((item) => item.id === product.id)?.brand || ''}
                        />
                    ))}
            </tbody>
        </table>
    );
};

export default CartProductList;
