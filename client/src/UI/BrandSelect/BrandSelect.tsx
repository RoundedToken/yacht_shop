import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { IBrandSelect } from './IBrandSelect';
import styles from './BrandSelect.module.scss';
import { addBrand, clearBrands, removeBrand } from '../../redux/navSlice';
import Text from '../Text/Text';
import closeImg from '../../assets/images/close.png';

const BrandSelect: FC<IBrandSelect> = () => {
    const location = useLocation().pathname.split('/');
    const id = Number(location[2]);
    const selectedBrands = useSelector((state: RootState) => state.navSlice.brands);
    const brands = useSelector((state: RootState) => state.navSlice.categoryList)
        .find((category) => category.id === id)
        ?.brands.slice()
        .sort((a, b) =>
            selectedBrands.includes(a) && !selectedBrands.includes(b)
                ? -1
                : !selectedBrands.includes(a) && selectedBrands.includes(b)
                ? 1
                : a > b
                ? 1
                : b > a
                ? -1
                : 0
        );

    const dispatch = useDispatch();

    const brandOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addBrand(brand) : removeBrand(brand));
    };

    const clearOnClick = () => {
        dispatch(clearBrands());
    };

    return (
        <div className={`${styles.brandsContainer} brandsContainer`}>
            <div className={styles.header}>
                <Text rus="Бренды" eng="Brands" est="Kaubamärgid" />

                <button onClick={clearOnClick}>
                    <img src={closeImg} alt="" width={16} height={16} />
                    <Text rus="Очистить" eng="Clear" est="Selge" />
                </button>
            </div>

            {brands?.map((brand) => (
                <label className={styles.container} key={brand}>
                    <input
                        checked={[...selectedBrands].includes(brand)}
                        value={brand}
                        type="checkbox"
                        onChange={(e) => brandOnClick(e)}
                    />

                    {brand}

                    <span className={styles.checkMark}></span>
                </label>
            ))}
        </div>
    );
};

export default BrandSelect;
