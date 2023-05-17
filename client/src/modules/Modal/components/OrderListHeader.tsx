import React from 'react';
import Text from '../../../UI/Text/Text';

const OrderListHeader = () => {
    return (
        <thead>
            <tr>
                <th>№</th>

                <th>
                    <Text rus="Товар" eng="Product" est="Toode" />
                </th>

                <th>
                    <Text rus="Код" eng="Code" est="Kood" />
                </th>

                <th>
                    <Text rus="Цена" eng="Price" est="Hind" />
                </th>

                <th>
                    <Text rus="К-во" eng="Amount" est="Kogus" />
                </th>

                <th>
                    <Text rus="Всего" eng="Total" est="Kokku" />
                </th>
            </tr>
        </thead>
    );
};

export default OrderListHeader;
