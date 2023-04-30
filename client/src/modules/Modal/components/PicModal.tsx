import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { IPicModal } from '../interfaces/IPicModal';

const PicModal: FC<IPicModal> = ({ styles }) => {
    const picSrc = useSelector((state: RootState) => state.modalSlice.picSrc);

    return (
        <div className={styles.modalContent}>
            <img src={picSrc} alt="" />
        </div>
    );
};

export default PicModal;
