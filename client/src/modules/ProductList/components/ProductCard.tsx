import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import ProductName from '../../../UI/ProductName/ProductName';
import ProductPic from '../../../UI/ProductPic/ProductPic';
import Text from '../../../UI/Text/Text';
import { IProductCard } from '../interfaces/IProductCard';
import ProductCart from './ProductCart';
import ProductInStock from './ProductInStock';

const ProductCard: FC<IProductCard> = ({ styles, product }) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.topBlock}>
                <div className={styles.pictureBlock}>
                    <ProductPic src={product.src} />
                </div>

                <div className={styles.descriptionBlock}>
                    <ProductName id={product.id} name={product.name} />

                    <hr />

                    <div className={styles.productCardDescription}>
                        <Text rus="Бренд:" eng="Brand:" est="Brändi:" />

                        {product.brand}
                    </div>

                    <div className={styles.productCardDescription}>
                        <Text rus="Код:" eng="Code:" est="Kood:" />

                        {product.code}
                    </div>

                    <div className={styles.productCardDescription}>
                        <Text rus="В наличии:" eng="In stock:" est="Laos:" />

                        <ProductInStock type="verbal" styles={styles} inStock={product.inStock} />
                    </div>
                </div>
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.productCardPrice}>{eurFormatter.format(product.price)}</div>

                <div className={styles.productCardMenu}>
                    <FavoritesButton id={product.id} />

                    <ProductCart styles={styles} product={product} />

                    <CountControl id={product.id} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
