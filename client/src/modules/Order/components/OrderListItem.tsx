import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IOrderListItem } from '../interfaces/IOrderListItem';

const OrderListItem: FC<IOrderListItem> = ({ index, product }) => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);
    const formatter = new Intl.NumberFormat('et', {
        style: 'currency',
        currency: 'EUR',
    });

    return (
        <tr key={product.id}>
            <td>{index + 1}</td>

            <td>{product.name}</td>

            <td>{product.code}</td>

            <td>{formatter.format(productList[index].price)}</td>

            <td>{productList[index].count}</td>

            <td>{formatter.format(productList[index].count * productList[index].price)}</td>
        </tr>
    );
};

export default OrderListItem;
