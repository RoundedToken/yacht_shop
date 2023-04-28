import React, { FC } from 'react';
import styles from './HorizontalLine.module.scss';
import { IHorizontalLine } from './IHorizontalLine';

const HorizontalLine: FC<IHorizontalLine> = ({ colSpan }) => {
    return (
        <tr>
            <td colSpan={colSpan}>
                <hr className={styles.horizontalLine} />
            </td>
        </tr>
    );
};

export default HorizontalLine;
