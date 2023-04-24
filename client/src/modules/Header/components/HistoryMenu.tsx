import React, { FC } from 'react';
import { IHistoryMenu } from '../interfaces/IHistoryMenu';
import leftArrowImg from '../../../assets/images/leftArrow.png';
import rightArrowImg from '../../../assets/images/rightArrow.png';
import loupeImg from '../../../assets/images/loupe.png';
import resetImg from '../../../assets/images/reset.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { switchSearchModalDisplay } from '../../../redux/stylesSlice';

const HistoryMenu: FC<IHistoryMenu> = ({ styles }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const resetOnClick = () => {
        navigate('/refresh');
    };
    const backOnClick = () => {
        navigate(-1);
    };
    const nextOnClick = () => {
        navigate(1);
    };
    const openSearch = () => {
        dispatch(switchSearchModalDisplay());
        document.body.style.overflow = 'hidden';
    };

    return (
        <div className={styles.historyMenu}>
            <img src={leftArrowImg} alt="" onClick={backOnClick} />

            <img src={rightArrowImg} alt="" onClick={nextOnClick} />

            <img src={resetImg} alt="" onClick={resetOnClick} />

            <img className={styles.loupeImg} src={loupeImg} alt="" onClick={openSearch} />
        </div>
    );
};

export default HistoryMenu;
