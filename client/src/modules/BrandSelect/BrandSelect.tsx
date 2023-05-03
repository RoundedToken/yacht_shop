import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { IBrandSelect } from './interfaces/IBrandSelect';
import styles from './BrandSelect.module.scss';
import { addBrand, removeBrand } from '../../redux/navSlice';
import { routeConstants } from '../../models/enums/EConstants';
import BrandSelectHeader from './components/BrandSelectHeader';
import CategoryBrandSelect from './components/CategoryBrandSelect';
import SearchBrandSelect from './components/SearchBrandSelect';
import FavoritesBrandSelect from './components/FavoritesBrandSelect';
import CartBrandSelect from './components/CartBrandSelect';

const BrandSelect: FC<IBrandSelect> = () => {
    const location = useLocation().pathname.split('/');
    const locationPath = '/' + location[1];
    const locationParams = location[2];
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const selectedBrands = useSelector((state: RootState) => state.navSlice.brands);
    const dispatch = useDispatch();

    const brandOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addBrand(brand) : removeBrand(brand));
    };

    return (
        <div className={`${styles.brandsContainer} brandsContainer`}>
            <BrandSelectHeader selectedBrands={selectedBrands} styles={styles} />

            {(locationPath === routeConstants.CATEGORIES_ROUTE ||
                locationPath === routeConstants.PRODUCT_LIST_ROUTE) && (
                <CategoryBrandSelect
                    styles={styles}
                    categoryId={Number(locationParams)}
                    selectedBrands={selectedBrands}
                    brandOnChange={brandOnChange}
                />
            )}

            {locationPath === routeConstants.SEARCH_ROUTE && (
                <SearchBrandSelect
                    styles={styles}
                    selectedBrands={selectedBrands}
                    brandOnChange={brandOnChange}
                    lang={lang}
                    locationParams={locationParams}
                    locationPath={locationPath}
                />
            )}

            {locationPath === routeConstants.FAVORITES_ROUTE && (
                <FavoritesBrandSelect
                    styles={styles}
                    selectedBrands={selectedBrands}
                    brandOnChange={brandOnChange}
                    lang={lang}
                    locationPath={locationPath}
                />
            )}

            {locationPath === routeConstants.CART_ROUTE && (
                <CartBrandSelect
                    styles={styles}
                    selectedBrands={selectedBrands}
                    brandOnChange={brandOnChange}
                />
            )}
        </div>
    );
};

export default BrandSelect;
