import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { webRelatedProductsApi } from '../../../services/webRelatedProducts';
import Text from '../../../UI/Text/Text';
import ProductCard from '../../ProductCard/ProductCard';
import ProductCardSkeleton from '../../ProductCard/ProductCardSkeleton';
import { IRelatedProducts } from '../interfaces/IRelatedProducts';

const RelatedProducts: FC<IRelatedProducts> = ({ styles, id }) => {
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const { data, isFetching } = webRelatedProductsApi.useFetchRelatedProductsQuery({ id, lang });
    const cartProductList = useSelector((state: RootState) => state.cartSlice.productList);

    if (isFetching)
        return (
            <div className={styles.related}>
                <div className={styles.relatedTitle}>
                    <Text rus="Сопутствующие товары" eng="Related products" est="Seotud tooted" />
                </div>

                <div className={styles.relatedGrid}>
                    {Array(6)
                        .fill(0)
                        .map((item, i) => (
                            <ProductCardSkeleton key={i} />
                        ))}
                </div>
            </div>
        );

    if (data?.length === 0) return null;

    return (
        <div className={styles.related}>
            <div className={styles.relatedTitle}>
                <Text rus="Сопутствующие товары" eng="Related products" est="Seotud tooted" />
            </div>

            <div className={styles.relatedGrid}>
                {data &&
                    data.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            brand={product.brand}
                            code={product.code}
                            inStock={product.inStock}
                            price={product.price}
                            src={product.src}
                            count={
                                cartProductList.find((cartProduct) => cartProduct.id === product.id)
                                    ?.count as number
                            }
                        />
                    ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
