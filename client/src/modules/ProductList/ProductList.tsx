import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TId } from '../../models/types/TId';
import { RootState } from '../../redux/store';
import { navProductListApi } from '../../services/navProductListService';
import styles from './ProductList.module.scss';
import ProductListHeader from './components/ProductListHeader';
import ProductListItem from './components/ProductListItem';

const ProductList = () => {
    const id = Number(useParams<TId>().id);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const {
        data: productList,
        isFetching,
        error,
    } = navProductListApi.useFetchProductListQuery({ id, lang });
    const brands = useSelector((state: RootState) => state.navSlice.brands);

    return (
        <div className={styles.productListContainer}>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {!isFetching &&
                (productList?.length === 0 ? (
                    <h1>ProductList Not Found</h1>
                ) : (
                    <table className={styles.productList}>
                        <ProductListHeader />

                        <tbody>
                            {productList
                                ?.filter((product) =>
                                    brands.length === 0
                                        ? true
                                        : [...brands].includes(product.brand.toLowerCase())
                                )
                                .map((product) => (
                                    <ProductListItem
                                        key={product.id}
                                        product={product}
                                        styles={styles}
                                    />
                                ))}
                        </tbody>
                    </table>
                ))}
        </div>
    );
};

export default ProductList;
