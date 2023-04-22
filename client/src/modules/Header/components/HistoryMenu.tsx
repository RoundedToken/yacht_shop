import React, { FC } from 'react';
import { IHistoryMenu } from '../interfaces/IHistoryMenu';
import leftArrowImg from '../../../assets/images/leftArrow.png';
import rightArrowImg from '../../../assets/images/rightArrow.png';
import loupeImg from '../../../assets/images/loupe.png';
import resetImg from '../../../assets/images/reset.png';
import { useNavigate } from 'react-router-dom';

const HistoryMenu: FC<IHistoryMenu> = ({ styles }) => {
    const navigate = useNavigate();

    const resetOnClick = () => {
        navigate('/refresh');
    };
    const backOnClick = () => {
        navigate(-1);
    };
    const nextOnClick = () => {
        navigate(1);
    };

    return (
        <div className={styles.historyMenu}>
            <img src={leftArrowImg} alt="" onClick={backOnClick} />

            <img src={rightArrowImg} alt="" onClick={nextOnClick} />

            <img src={resetImg} alt="" onClick={resetOnClick} />

            <img className={styles.loupeImg} src={loupeImg} alt="" />
        </div>
    );
};

export default HistoryMenu;
