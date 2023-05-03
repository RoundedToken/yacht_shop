import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { IResponseListItem } from '../interfaces/IResponseListItem';

const ResponseListItem: FC<IResponseListItem> = ({ index, product }) => {
    return (
        <tr key={product.id}>
            <td>{index + 1}</td>

            <td>{product.name}</td>

            <td>{product.code}</td>

            <td>{eurFormatter.format(product.price)}</td>

            <td>{product.count}</td>

            <td>{eurFormatter.format(product.count * product.price)}</td>
        </tr>
    );
};

export default ResponseListItem;
