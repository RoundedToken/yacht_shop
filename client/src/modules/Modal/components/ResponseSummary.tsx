import React, { FC } from 'react';
import { eurFormatter } from '../../../helpers/eurFormatter';
import Text from '../../../UI/Text/Text';
import { IResponseSummary } from '../interfaces/IResponseSummary';

const ResponseSummary: FC<IResponseSummary> = ({ productList }) => {
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

export default ResponseSummary;
