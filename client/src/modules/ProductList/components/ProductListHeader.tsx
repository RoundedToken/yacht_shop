import React from 'react';
import Text from '../../../UI/Text/Text';

const ProductListHeader = () => {
    return (
        <thead>
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

                <th>
                    <Text rus="В наличии" eng="In stock" est="Laos" />
                </th>
                <th>
                    <Text rus="Избранное" eng="Favorites" est="Lemmikud" />
                </th>
                <th>
                    <Text rus="Корзина" eng=" Cart" est="Ostukorv" />
                </th>
                <th></th>
            </tr>
        </thead>
    );
};

export default ProductListHeader;
