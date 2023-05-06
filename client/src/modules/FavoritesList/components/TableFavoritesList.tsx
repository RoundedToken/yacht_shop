import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { brandFilter } from '../helpers/brandFilter';
import { favoritesSort } from '../helpers/favoritesSort';
import { ITableFavoritesList } from '../interfaces/ITableFavoritesList';
import FavoritesItem from './FavoritesItem';
import FavoritesListHeader from './FavoritesListHeader';

const TableFavoritesList: FC<ITableFavoritesList> = ({ styles, data, brands }) => {
    const filteredData = brandFilter(data, brands);
    const sortRules = useSelector((state: RootState) => state.sideBarSlice.favoritesSorting);
    const sortedData = favoritesSort(filteredData, sortRules);

    return (
        <table>
            <FavoritesListHeader styles={styles} />

            <tbody>
                {sortedData.map((item) => (
                    <FavoritesItem key={item.id} product={item} styles={styles} />
                ))}
            </tbody>
        </table>
    );
};

export default TableFavoritesList;
