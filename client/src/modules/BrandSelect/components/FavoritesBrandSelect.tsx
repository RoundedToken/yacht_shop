import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { routeConstants } from '../../../models/enums/EConstants';
import { RootState } from '../../../redux/store';
import { webCartProductList } from '../../../services/webCartProductList';
import { sortByBrands } from '../helpers/sortByBrands';
import { IFavoritesBrandSelect } from '../interfaces/IFavoritesBrandsSelect';
import BrandSelectItem from './BrandSelectItem';

const FavoritesBrandSelect: FC<IFavoritesBrandSelect> = ({
    styles,
    selectedBrands,
    brandOnChange,
    lang,
    locationPath,
}) => {
    const favoritesUpdate = useSelector((state: RootState) => state.favoritesSlice.update);
    const favoritesIdList = useSelector((state: RootState) => state.favoritesSlice.favoritesList);
    const [updateFavorites, { data: favoritesList, isFetching, error }] =
        webCartProductList.useLazyFetchCartProductListQuery();

    useEffect(() => {
        if (locationPath === routeConstants.FAVORITES_ROUTE) {
            updateFavorites({ idList: favoritesIdList, lang });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locationPath, favoritesUpdate, lang, updateFavorites]);
    return (
        <>
            {isFetching && <h1>Loading...</h1>}
            {error && <h1>Error!</h1>}
            {!isFetching &&
                sortByBrands(
                    Array.from(
                        new Set(favoritesList?.map((product) => product.brand) || [])
                    ),
                    selectedBrands
                )?.map((brand) => (
                    <BrandSelectItem
                        key={brand}
                        styles={styles}
                        brand={brand}
                        selectedBrands={selectedBrands}
                        brandOnChange={brandOnChange}
                    />
                ))}
        </>
    );
};

export default FavoritesBrandSelect;
