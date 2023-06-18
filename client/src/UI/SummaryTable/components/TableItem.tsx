import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { ITableItem } from '../interfaces/ITableItem';

const TableItem: FC<ITableItem> = ({ index, product }) => {
    return (
        <tr>
            <td>{index + 1}</td>

            <td>{product.name}</td>

            <td>{product.code}</td>

            <td>{eurFormatter.format(product.price)}</td>

            <td>{product.count}</td>

            <td>{eurFormatter.format(product.count * product.price)}</td>
        </tr>
    );
};

export default TableItem;
