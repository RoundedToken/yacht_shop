import React, { FC } from 'react';
import { ITableProductList } from '../interfaces/ITableProductList';
import ProductListHeader from './ProductListHeader';
import ProductListItem from './ProductListItem';

const TableProductList: FC<ITableProductList> = ({ styles, productList, brands }) => {
    return (
        <table className={styles.productList}>
            <ProductListHeader />

            <tbody>
                {productList
                    .filter((product) =>
                        brands.length === 0 ? true : brands.includes(product.brand.toLowerCase())
                    )
                    .map((product) => (
                        <ProductListItem key={product.id} product={product} styles={styles} />
                    ))}
            </tbody>
        </table>
    );
};

export default TableProductList;
