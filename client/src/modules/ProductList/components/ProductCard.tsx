import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { routeConstants } from '../../../models/enums/EConstants';
import CountControl from '../../../UI/CountControl/CountControl';
import FavoritesButton from '../../../UI/FavoritesButton/FavoritesButton';
import Text from '../../../UI/Text/Text';
import { IProductCard } from '../interfaces/IProductCard';
import ProductCart from './ProductCart';

const ProductCard: FC<IProductCard> = ({ styles, product }) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.topBlock}>
                <div className={styles.pictureBlock}>
                    <img src={product.src} alt="" />
                </div>
                <div className={styles.descriptionBlock}>
                    <Link
                        to={routeConstants.PRODUCT_ROUTE + `/${product.id}`}
                        className={styles.productCardName}
                    >
                        {product.name}
                    </Link>
                    <hr />
                    <div className={styles.productCardBrand}>
                        <Text rus="Бренд:" eng="Brand:" est="Brändi:" />
                        {product.brand}
                    </div>
                    <div className={styles.productCardCode}>
                        <Text rus="Код:" eng="Code:" est="Kood:" />
                        {product.code}
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
