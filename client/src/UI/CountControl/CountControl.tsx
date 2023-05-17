import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICountControl } from './ICountControl';
import { decrementCount, incrementCount, setCount } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import styles from './CountControl.module.scss';

const CountControl: FC<ICountControl> = ({ id }) => {
    const count = useSelector(
        (state: RootState) =>
            state.cartSlice.productList.find((product) => product.id === id)?.count
    );
    const dispatch = useDispatch();

    const incrementOnClick = () => {
        if (count && count < 999) dispatch(incrementCount(id));
    };

    const decrementOnClick = () => {
        dispatch(decrementCount(id));
    };

    const countOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '0') dispatch(setCount({ id, count: 1 }));
        else if (value === '') dispatch(setCount({ id, count: 1 }));
        else if (/^[0-9][0-9]*$/.test(value)) dispatch(setCount({ id, count: Number(value) }));
    };

    if (!count) return null;

    return (
        <div className={styles.countControl}>
            <div className={styles.button} onClick={decrementOnClick}>
                &minus;
            </div>

            <div className={styles.item}>
                <input
                    value={count}
                    type="tel"
                    maxLength={3}
                    minLength={1}
                    onChange={(e) => countOnChange(e)}
                />
            </div>

            <div className={styles.button} onClick={incrementOnClick}>
                +
            </div>
        </div>
    );
};

export default CountControl;
