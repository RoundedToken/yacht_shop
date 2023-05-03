import React, { FC, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IBrandSelectItem } from '../interfaces/IBrandSelectItem';

const BrandSelectItem: FC<IBrandSelectItem> = ({
    styles,
    selectedBrands,
    brandOnChange,
    brand,
}) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    const brandsDisplay = useSelector((state: RootState) => state.stylesSlice.brandsDisplay);

    useEffect(() => {
        if (labelRef.current) labelRef.current.style.display = brandsDisplay;
    }, [brandsDisplay]);

    return (
        <label ref={labelRef} className={styles.container}>
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
