import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { IBrandSelect } from './interfaces/IBrandSelect';
import styles from './BrandSelect.module.scss';
import { routeConstants } from '../../models/enums/EConstants';
import BrandSelectHeader from './components/BrandSelectHeader';
import CategoryBrandSelect from './components/CategoryBrandSelect';
import SearchBrandSelect from './components/SearchBrandSelect';
import FavoritesBrandSelect from './components/FavoritesBrandSelect';
import CartBrandSelect from './components/CartBrandSelect';
import {
    addBrand,
    addCartBrand,
    addFavoritesBrand,
    removeBrand,
    removeCartBrand,
    removeFavoritesBrand,
} from '../../redux/sideBarSlice';
import FavoritesBrandSelectHeader from './components/FavoritesBrandSelectHeader';
import CartBrandSelectHeader from './components/CartBrandSelectHeader';

const BrandSelect: FC<IBrandSelect> = () => {
    const location = useLocation().pathname.split('/');
    const locationPath = '/' + location[1];
    const locationParams = location[2];
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const selectedBrands = useSelector((state: RootState) => state.sideBarSlice.brands);
    const selectedCartBrands = useSelector((state: RootState) => state.sideBarSlice.cartBrands);
    const selectedFavoritesBrands = useSelector(
        (state: RootState) => state.sideBarSlice.favoritesBrands
    );
    const brandsDisplay = useSelector((state: RootState) => state.stylesSlice.brandsDisplay);
    const dispatch = useDispatch();

    const brandOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addBrand(brand) : removeBrand(brand));
    };
    const brandCartOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addCartBrand(brand) : removeCartBrand(brand));
    };
    const brandFavoritesOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addFavoritesBrand(brand) : removeFavoritesBrand(brand));
    };

    return (
        <div
            style={brandsDisplay === 'none' ? {} : { width: '100%' }}
            className={`${styles.brandsContainer} brandsContainer`}
        >
            {(locationPath === routeConstants.CATEGORIES_ROUTE ||
                locationPath === routeConstants.PRODUCT_LIST_ROUTE) && (
                <>
                    <BrandSelectHeader selectedBrands={selectedBrands} styles={styles} />

                    <CategoryBrandSelect
                        styles={styles}
                        categoryId={Number(locationParams)}
                        selectedBrands={selectedBrands}
                        brandOnChange={brandOnChange}
                    />
                </>
            )}

            {locationPath === routeConstants.SEARCH_ROUTE && (
                <>
                    <BrandSelectHeader selectedBrands={selectedBrands} styles={styles} />

                    <SearchBrandSelect
                        styles={styles}
                        selectedBrands={selectedBrands}
                        brandOnChange={brandOnChange}
                        lang={lang}
                        locationParams={locationParams}
                        locationPath={locationPath}
                    />
                </>
            )}

            {locationPath === routeConstants.FAVORITES_ROUTE && (
                <>
                    <FavoritesBrandSelectHeader
                        styles={styles}
                        selectedBrands={selectedFavoritesBrands}
                    />

                    <FavoritesBrandSelect
                        styles={styles}
                        selectedBrands={selectedFavoritesBrands}
                        brandOnChange={brandFavoritesOnChange}
                        lang={lang}
                        locationPath={locationPath}
                    />
                </>
            )}

            {locationPath === routeConstants.CART_ROUTE && (
                <>
                    <CartBrandSelectHeader styles={styles} selectedBrands={selectedCartBrands} />

                    <CartBrandSelect
                        styles={styles}
                        selectedBrands={selectedCartBrands}
                        brandOnChange={brandCartOnChange}
                    />
                </>
            )}
        </div>
    );
};

export default BrandSelect;
