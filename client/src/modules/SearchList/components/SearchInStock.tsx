import React, { FC } from 'react';
import closeImg from '../../../assets/images/close.png';
import checkImg from '../../../assets/images/check.png';
import { ISearchInStock } from '../interfaces/ISearchInStock';

const SearchInStock: FC<ISearchInStock> = ({ styles, inStock }) => {
    return inStock ? (
        <img className={styles.checkImg} src={checkImg} alt="" />
    ) : (
        <img className={styles.closeImg} src={closeImg} alt="" />
    );
};

export default SearchInStock;
