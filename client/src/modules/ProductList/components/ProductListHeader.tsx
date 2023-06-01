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
                    <Text rus="Наличие" eng="In stock" est="Laos" />
                </th>

                <th>
                    <Text rus="Цена" eng="Price" est="Hind" />
                </th>

                <th></th>
            </tr>
        </thead>
    );
};

export default ProductListHeader;
