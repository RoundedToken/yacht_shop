import React, { FC } from 'react';
import Text from '../../Text/Text';
import { eurFormatter } from '../../../helpers/eurFormatter';
import { ITableSummary } from '../interfaces/ITableSummary';

const TableSummary: FC<ITableSummary> = ({ totalSum }) => {
    return (
        <tr>
            <td></td>

            <td></td>

            <td></td>

            <td></td>

            <td>
                <Text rus="Итого:" eng="Total:" est="Kokku:" />
            </td>

            <td>{eurFormatter.format(totalSum)}</td>
        </tr>
    );
};

export default TableSummary;
