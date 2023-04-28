import React, { FC } from 'react';
import { IBrandSelectItem } from '../interfaces/IBrandSelectItem';

const BrandSelectItem: FC<IBrandSelectItem> = ({
    styles,
    selectedBrands,
    brandOnChange,
    brand,
}) => {
    return (
        <label className={styles.container}>
            <input
                checked={[...selectedBrands].includes(brand)}
                value={brand}
                type="checkbox"
                onChange={(e) => brandOnChange(e)}
            />

            {brand}

            <span className={styles.checkMark}></span>
        </label>
    );
};

export default BrandSelectItem;
