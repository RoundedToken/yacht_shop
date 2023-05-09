import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IDetails } from '../interfaces/IDetails';

const Details: FC<IDetails> = ({ styles, brand, code, inStock }) => {
    return (
        <div className={styles.details}>
            <div className={`${styles.details__item} ${styles.brand}`}>
                <div className={styles.details__item__title}>
                    <Text rus="Бренд" eng="Brand" est="Brändi" />
                </div>

                <div className={styles.details__item__content}>{brand}</div>
            </div>

            <div className={styles.details__item}>
                <div className={styles.details__item__title}>
                    <Text rus="Код" eng="Code" est="Kood" />
                </div>

                <div className={styles.details__item__content}>{code}</div>
            </div>

            <div className={`${styles.details__item} ${styles.inStock}`}>
                <div className={styles.details__item__title}>
                    <Text rus="В наличии" eng="In stock" est="Laos" />
                </div>

                <div className={styles.details__item__content}>
                    {inStock ? (
                        <Text rus="Да" eng="Yes" est="Jah" />
                    ) : (
                        <Text rus="Нет" eng="No" est="Ei" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
