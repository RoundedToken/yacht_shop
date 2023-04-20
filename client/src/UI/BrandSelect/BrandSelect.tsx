import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { IBrandSelect } from './IBrandSelect';
import styles from './BrandSelect.module.scss';
import { addBrand, clearBrands, removeBrand } from '../../redux/navSlice';

const BrandSelect: FC<IBrandSelect> = () => {
    const location = useLocation().pathname.split('/');
    const id = Number(location[2]);
    const brands = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (category) => category.id === id
    )?.brands;
    const dispatch = useDispatch();

    const brandOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addBrand(brand) : removeBrand(brand));
    };

    useEffect(() => {
        return () => {
            dispatch(clearBrands());
        };
    }, [dispatch]);

    return (
        <div className={styles.brandsContainer}>
            {brands?.map((brand) => (
                <div className={styles.brand} key={brand}>
                    <input
                        value={brand}
                        type="checkbox"
                        name={brand}
                        onChange={(e) => brandOnClick(e)}
                    />
                    <label htmlFor={brand}>{brand}</label>
                </div>
            ))}
        </div>
    );
};

export default BrandSelect;
