import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { RootState } from '../../../redux/store';
import { IOrderListItem } from '../interfaces/IOrderListItem';

const OrderListItem: FC<IOrderListItem> = ({ index, product }) => {
    const productList = useSelector((state: RootState) => state.cartSlice.productList);

    return (
        <tr key={product.id}>
            <td>{index + 1}</td>

            <td>{product.name}</td>

            <td>{product.code}</td>

            <td>{eurFormatter.format(productList[index].price)}</td>

            <td>{productList[index].count}</td>

            <td>{eurFormatter.format(productList[index].count * productList[index].price)}</td>
        </tr>
    );
};

export default OrderListItem;
