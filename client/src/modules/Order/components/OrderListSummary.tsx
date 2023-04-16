import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';

const OrderListSummary = () => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const totalCount = productList.reduce((pV, cV) => pV + cV.count, 0);
    const totalSum = productList.reduce((pV, cV) => pV + cV.count * cV.price, 0);
    const formatter = new Intl.NumberFormat('et', {
        style: 'currency',
        currency: 'EUR',
    });

    return (
        <tr>
            <td></td>

            <td></td>

            <td></td>

            <td>
                <Text rus="Итого:" eng="Total:" est="Kokku:" />
            </td>

            <td>{totalCount}</td>

            <td>{formatter.format(totalSum)}</td>
        </tr>
    );
};

export default OrderListSummary;
