import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { IBrandSelect } from './IBrandSelect';
import styles from './BrandSelect.module.scss';
import { addBrand, clearBrands, removeBrand } from '../../redux/navSlice';
import Text from '../Text/Text';
import closeImg from '../../assets/images/close.png';
import { webSearchApi } from '../../services/webSearch';
import { routeConstants } from '../../models/enums/EConstants';
import { webCartProductList } from '../../services/webCartProductList';

const BrandSelect: FC<IBrandSelect> = () => {
    const cartListBrands = useSelector((state: RootState) => state.cartSlice.productList).map(
        (product) => product.brand
    );
    const location = useLocation().pathname.split('/');
    const locationPath = '/' + location[1];
    const locationParams = location[2];
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const selectedBrands = useSelector((state: RootState) => state.navSlice.brands);
    const favoritesUpdate = useSelector((state: RootState) => state.favoritesSlice.update);
    const favoritesListId = useSelector(
        (state: RootState) => state.favoritesSlice.favoritesList
    ).map((product) => product.id);
    const brands = useSelector((state: RootState) => state.navSlice.categoryList)
        .find((category) => category.id === Number(locationParams))
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
    const [
        updateWebSearch,
        { data: searchProductList, isFetching: searchIsFetching, error: searchError },
    ] = webSearchApi.useLazyFetchProductListQuery();
    const [
        updateFavorites,
        { data: favoritesList, isFetching: favoritesIsFetching, error: favoritesError },
    ] = webCartProductList.useLazyFetchCartProductListQuery();
    const dispatch = useDispatch();

    const brandOnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const brand = e.target.value;
        dispatch(isChecked ? addBrand(brand) : removeBrand(brand));
    };

    const clearOnClick = () => {
        dispatch(clearBrands());
    };

    //Fetch webSearchApi
    useEffect(() => {
        if (locationPath === routeConstants.SEARCH_ROUTE) {
            updateWebSearch({ searchStr: decodeURI(locationParams), lang });
        }
    }, [locationPath, locationParams, lang, updateWebSearch]);
    //Fetch favorites
    useEffect(() => {
        if (locationPath === routeConstants.FAVORITES_ROUTE) {
            updateFavorites({ idList: favoritesListId, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationPath, favoritesUpdate, lang, updateFavorites]);

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
            {searchIsFetching && <h1>Loading...</h1>}
            {searchError && <h1>Error!</h1>}
            {!searchIsFetching &&
                Array.from(
                    new Set([
                        ...(searchProductList?.map((product) => product.brand.toLowerCase()) || []),
                    ])
                )
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
                    )
                    .map((brand) => (
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
            {favoritesIsFetching && <h1>Loading...</h1>}
            {favoritesError && <h1>Error!</h1>}
            {!favoritesIsFetching &&
                Array.from(
                    new Set([
                        ...(favoritesList?.map((product) => product.brand.toLowerCase()) || []),
                    ])
                )
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
                    )
                    .map((brand) => (
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
            {locationPath === routeConstants.CART_ROUTE &&
                Array.from(new Set([...cartListBrands]))
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
                    )
                    .map((brand) => (
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
