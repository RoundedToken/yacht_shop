import React, { FC } from 'react';
import styles from './ProductCard.module.scss';
import ProductPic from '../../UI/ProductPic/ProductPic';
import ProductName from '../../UI/ProductName/ProductName';
import Price from './components/Price';
import MobilePrice from './components/MobilePrice';
import Details from './components/Details';
import Menu from './components/Menu';
import { IProductCard } from './interfaces/IProductCard';

const ProductCard: FC<IProductCard> = ({
    id,
    src,
    name,
    price,
    count,
    brand,
    code,
    inStock,
    isDecimals,
}) => {
    return (
        <div className={styles.rootContainer}>
            <div className={styles.leftContainer}>
                <ProductPic src={src} />
            </div>

            <div className={styles.rightContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.name}>
                        <ProductName id={id} name={name} />
                    </div>

                    <Price styles={styles} count={count} price={price} />
                </div>

                <div className={styles.bottomContainer}>
                    <Details styles={styles} brand={brand} code={code} inStock={inStock} />

                    <MobilePrice styles={styles} count={count} price={price} />

                    <Menu
                        styles={styles}
                        id={id}
                        brand={brand}
                        price={price}
                        isDecimals={isDecimals}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
