import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { webCartProductList } from '../../services/webCartProductList';
import FavoritesItem from './components/FavoritesItem';
import FavoritesListHeader from './components/FavoritesListHeader';
import styles from './FavoritesList.module.scss';
import { toFalseTheUpdate } from '../../redux/favoritesSlice';
import FavoritesEmpty from './components/FavoritesEmpty';

const FavoritesList = () => {
    const favoritesIdList = useSelector((state: RootState) => state.favoritesSlice.favoritesList);
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const favoritesUpdate = useSelector((state: RootState) => state.favoritesSlice.update);
    const brands = useSelector((state: RootState) => state.navSlice.brands);
    const [update, { data, isFetching, error }] =
        webCartProductList.useLazyFetchCartProductListQuery();
    const dispatch = useDispatch();

    //Lang
    useEffect(() => {
        update({ idList: favoritesIdList, lang });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lang]);

    //favoritesUpdate
    useEffect(() => {
        if (favoritesUpdate) {
            update({ idList: favoritesIdList, lang });
            dispatch(toFalseTheUpdate());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favoritesUpdate]);

    if (isFetching)
        return (
            <div className={styles.favoritesContainer}>
                {favoritesIdList.map((id) => (
                    <h1 key={id}>Loading...</h1>
                ))}
            </div>
        );

    return (
        <div className={styles.favoritesContainer}>
            {error && <h1>Error!</h1>}
            {data ? (
                <table>
                    <FavoritesListHeader styles={styles} />
                    <tbody>
                        {data
                            .filter((product) =>
                                brands.length === 0
                                    ? true
                                    : [...brands].includes(
                                          (
                                              data.find((item) => item.id === product.id)?.brand ||
                                              ''
                                          ).toLowerCase()
                                      )
                            )
                            .map((item) => (
                                <FavoritesItem
                                    key={item.id}
                                    id={item.id}
                                    styles={styles}
                                    name={item.name}
                                    brand={item.brand}
                                    code={item.code}
                                    price={item.price}
                                    src={item.src}
                                />
                            ))}
                    </tbody>
                </table>
            ) : (
                <FavoritesEmpty styles={styles} />
            )}
        </div>
    );
};

export default FavoritesList;
