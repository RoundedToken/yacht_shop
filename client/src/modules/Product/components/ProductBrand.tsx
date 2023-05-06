import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IProductBrand } from '../interfaces/IProductBrand';

const ProductBrand: FC<IProductBrand> = ({ styles, brand, brandLogo }) => {
    return (
        <div className={styles.descriptionBrand}>
            <div className={styles.descriptionItem}>
                <div className={styles.itemTitle}>
                    <Text rus="Бренд:" eng="Brand:" est="Brändi:" />
                </div>

                {brand}
            </div>

            <img src={brandLogo} alt="" />
        </div>
    );
};

export default ProductBrand;
