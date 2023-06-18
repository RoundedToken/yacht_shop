import React, { FC, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ICategoryItem } from '../interfaces/ICategoryItem';
import { routeConstants } from '../../../models/enums/EConstants';
import categoryDefaultImg from '../../../assets/images/categoryDefault.png';

const CategoryItem: FC<ICategoryItem> = ({ id, children, hasChildren, styles, parentId, src }) => {
    const imgRef = useRef<HTMLImageElement>(null);

    const onImgError = () => {
        if (imgRef.current) {
            imgRef.current.src = categoryDefaultImg;
            imgRef.current.className = styles.defaultProductPic;
        }
    };

    return (
        <Link
            className={styles.categoryItem}
            to={
                hasChildren
                    ? routeConstants.CATEGORIES_ROUTE + `/${id}`
                    : routeConstants.PRODUCT_LIST_ROUTE + `/${id}`
            }
        >
            <div className={styles.imageContainer}>
                <div className={styles.mask} />
                <img ref={imgRef} src={src} alt="" onError={onImgError} />
            </div>
            {children}
        </Link>
    );
};

export default CategoryItem;
