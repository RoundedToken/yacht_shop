import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import { IProductListHeader } from '../interfaces/IProductListHeader';

const ProductListHeader: FC<IProductListHeader> = ({ styles }) => {
    return (
        <thead className={styles.productListHeader}>
            <tr>
                <th>
                    <Text rus="Товар" eng="Product" est="Toode" />
                </th>

                <th>
                    <Text rus="Количество" eng="Amount" est="Kogus" />
                </th>

                <th>
                    <Text rus="Цена" eng="Price" est="Hind" />
                </th>

                <th>
                    <Text rus="Всего" eng="Total" est="Kokku" />
                </th>

                <th></th>

                <th></th>
            </tr>
        </thead>
    );
};

export default ProductListHeader;
