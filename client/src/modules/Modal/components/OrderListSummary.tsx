import React from 'react';
import { useSelector } from 'react-redux';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { RootState } from '../../../redux/store';
import Text from '../../../UI/Text/Text';

const OrderListSummary = () => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const totalCount = productList.reduce((pV, cV) => pV + cV.count, 0);
    const totalSum = productList.reduce((pV, cV) => pV + cV.count * cV.price, 0);

    return (
        <tr>
            <td></td>

            <td></td>

            <td></td>

            <td>
                <Text rus="Итого:" eng="Total:" est="Kokku:" />
            </td>

            <td>{totalCount}</td>

            <td>{eurFormatter.format(totalSum)}</td>
        </tr>
    );
};

export default OrderListSummary;
