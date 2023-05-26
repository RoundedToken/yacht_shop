import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TListMode } from '../../../models/types/TListMode';
import { setListMode } from '../../../redux/sideBarSlice';
import { RootState } from '../../../redux/store';
import gridViewImg from '../../../assets/images/gridView.png';
import tableViewImg from '../../../assets/images/tableView.png';
import { IListModeSwitch } from '../interfaces/IListModeSwitch';

const ListModeSwitch: FC<IListModeSwitch> = ({ styles }) => {
    const listMode = useSelector((state: RootState) => state.sideBarSlice.listMode);
    const dispatch = useDispatch();

    const listModeSwitchOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setListMode(e.target.value as TListMode));
    };

    return (
        <div className={styles.switchContainer}>
            <label className={listMode === 'table' ? styles.active : undefined}>
                <img src={tableViewImg} alt="" />

                <input
                    checked={listMode === 'table'}
                    type="radio"
                    name="listModeSwitch"
                    value="table"
                    onChange={(e) => listModeSwitchOnChange(e)}
                />
            </label>

            <label className={listMode === 'grid' ? styles.active : undefined}>
                <img src={gridViewImg} alt="" />

                <input
                    checked={listMode === 'grid'}
                    type="radio"
                    name="listModeSwitch"
                    value="grid"
                    onChange={(e) => listModeSwitchOnChange(e)}
                />
            </label>
        </div>
    );
};

export default ListModeSwitch;
