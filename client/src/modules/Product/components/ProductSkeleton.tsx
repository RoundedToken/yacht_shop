import React, { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

export interface IProductSkeleton {
    styles: {
        readonly [key: string]: string;
    };
}

const ProductSkeleton: FC<IProductSkeleton> = ({ styles }) => {
    return (
        <div className={styles.grid}>
            <div className={styles.menu}>
                <div className={styles.price}>
                    <Skeleton
                        style={{ width: '100px', height: '38px' }}
                        containerClassName="skeleton"
                    />
                </div>

                <div className={styles.favorites}>
                    <Skeleton
                        style={{ width: '27px', height: '27px' }}
                        containerClassName="skeleton"
                    />
                </div>

                <div className={styles.cart}>
                    <Skeleton
                        style={{ width: '94px', height: '27px' }}
                        containerClassName="skeleton"
                    />
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.image}>
                    <Skeleton
                        style={{ height: '265px', width: '320px' }}
                        containerClassName="skeleton"
                    />
                </div>

                <div style={{ gap: '2px' }} className={styles.details}>
                    <div className={styles.name}>
                        <Skeleton
                            style={{ width: '200px', height: '27px' }}
                            containerClassName="skeleton"
                        />
                    </div>

                    <div className={styles.detailsItem}>
                        <Skeleton
                            style={{ width: '180px', height: '18px', lineHeight: '22px' }}
                            containerClassName="skeleton"
                        />
                    </div>

                    <div className={styles.detailsItem}>
                        <Skeleton
                            style={{ width: '180px', height: '18px', lineHeight: '22px' }}
                            containerClassName="skeleton"
                        />
                    </div>

                    <div className={styles.detailsItem}>
                        <Skeleton
                            style={{ width: '180px', height: '18px', lineHeight: '22px' }}
                            containerClassName="skeleton"
                        />
                    </div>

                    <div className={styles.detailsItem}>
                        <Skeleton
                            style={{ width: '180px', height: '18px', lineHeight: '22px' }}
                            containerClassName="skeleton"
                        />
                    </div>

                    <div className={styles._mobileBrandLogo}>
                        <Skeleton
                            style={{ width: '150px', height: '65px' }}
                            containerClassName="skeleton"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.brandLogo}>
                <Skeleton style={{ height: '45px' }} containerClassName="skeleton" />
            </div>
        </div>
    );
};

export default ProductSkeleton;
