import React from 'react';
import styles from './ProductCard.module.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';

const ProductCardSkeleton = () => {
    const isCartLocation = '/' + useLocation().pathname.split('/')[1] === routeConstants.CART_ROUTE;

    return (
        <div className={styles.rootContainer}>
            <div className={styles.leftContainer}>
                <Skeleton style={{ height: '100%' }} containerClassName={styles.skeleton} />
            </div>

            <div className={styles.rightContainer}>
                <div className={styles.topContainer}>
                    <div className={styles.name}>
                        <Skeleton style={{ lineHeight: '0.8' }} />
                        <Skeleton style={{ lineHeight: '0.8' }} />
                    </div>

                    <div className={styles.price}>
                        <Skeleton containerClassName={styles.skeleton} />
                        <div
                            style={isCartLocation ? {} : { display: 'none' }}
                            className={styles.price__single}
                        >
                            <Skeleton containerClassName={styles.skeleton} />
                        </div>
                    </div>
                </div>

                <div className={styles.bottomContainer}>
                    <div className={styles.details}>
                        <div className={`${styles.details__item} ${styles.brand}`}>
                            <Skeleton
                                style={{ lineHeight: '0.7' }}
                                containerClassName={styles.skeleton}
                            />
                        </div>

                        <div className={styles.details__item}>
                            <Skeleton
                                style={{ lineHeight: '0.7' }}
                                containerClassName={styles.skeleton}
                            />
                        </div>

                        <div className={`${styles.details__item} ${styles.inStock}`}>
                            <Skeleton
                                style={{ lineHeight: '0.7' }}
                                containerClassName={styles.skeleton}
                            />
                        </div>
                    </div>

                    <div className={styles._mobilePrice}>
                        <Skeleton height={45} containerClassName={styles.skeleton} />
                    </div>
                    <div className={styles.menuSkeleton}>
                        <Skeleton height="100%" containerClassName={styles.skeleton} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
