import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IFavoritesListHeader } from '../interfaces/IFavoritesListHeader';

const FavoritesListHeader: FC<IFavoritesListHeader> = ({ styles }) => {
    return (
        <thead className={styles.favoritesListHeader}>
            <tr>
                <th>
                    <Text rus="Товар" eng="Product" est="Toode" />
                </th>

                <th>
                    <Text rus="Бренд" eng="Brand" est="Brändi" />
                </th>

                <th>
                    <Text rus="Код" eng="Code" est="Kood" />
                </th>

                <th>
                    <Text rus="Цена" eng="Price" est="Hind" />
                </th>

                <th></th>
            </tr>
        </thead>
    );
};

export default FavoritesListHeader;
