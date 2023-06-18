import React, { FC } from 'react';
import TableHeader from './components/TableHeader';
import styles from './SummaryTable.module.scss';
import TableItem from './components/TableItem';
import TableSummary from './components/TableSummary';
import { ISummaryTable } from './interfaces/ISummaryTable';

const SummaryTable: FC<ISummaryTable> = ({ list }) => {
    const totalSum = list.reduce((pV, cV) => pV + cV.count * cV.price, 0);

    return (
        <table className={styles.table}>
            <TableHeader />

            <tbody>
                {list.map((product, index) => (
                    <TableItem key={product.id} product={product} index={index} />
                ))}

                <TableSummary totalSum={totalSum} />
            </tbody>
        </table>
    );
};

export default SummaryTable;
