import React, { FC } from 'react';
import { IHistoryMenu } from '../interfaces/IHistoryMenu';
import leftArrowImg from '../../../assets/HeaderImg/leftArrow.png';
import rightArrowImg from '../../../assets/HeaderImg/rightArrow.png';
import backArrowImg from '../../../assets/HeaderImg/backArrow.png';

const HistoryMenu: FC<IHistoryMenu> = ({ styles }) => {
    return (
        <div className={styles.historyMenu}>
            <img src={backArrowImg} alt="" />

            <img src={leftArrowImg} alt="" />

            <img src={rightArrowImg} alt="" />
        </div>
    );
};

export default HistoryMenu;
