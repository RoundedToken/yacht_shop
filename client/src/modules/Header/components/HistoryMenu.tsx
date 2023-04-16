import React, { FC } from 'react';
import { IHistoryMenu } from '../interfaces/IHistoryMenu';
import leftArrowImg from '../../../assets/images/leftArrow.png';
import rightArrowImg from '../../../assets/images/rightArrow.png';
import backArrowImg from '../../../assets/images/backArrow.png';
import resetImg from '../../../assets/images/reset.png';
import { useNavigate } from 'react-router-dom';

const HistoryMenu: FC<IHistoryMenu> = ({ styles }) => {
    const navigate = useNavigate();

    const resetOnClick = () => {
        navigate('/refresh');
        navigate(-1);
    };

    return (
        <div className={styles.historyMenu}>
            <img src={backArrowImg} alt="" />

            <img src={leftArrowImg} alt="" />

            <img src={rightArrowImg} alt="" />

            <img src={resetImg} alt="" onClick={resetOnClick} />
        </div>
    );
};

export default HistoryMenu;
