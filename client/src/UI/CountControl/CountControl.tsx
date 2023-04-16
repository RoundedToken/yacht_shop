import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICountControl } from './ICountControl';
import { decrementCount, incrementCount, setCount } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import styles from './CountControl.module.scss';
import minusImg from '../../assets/images/minus.png';
import plusImg from '../../assets/images/plus.png';

const CountControl: FC<ICountControl> = ({ id }) => {
    const count = useSelector(
        (state: RootState) =>
            state.cartSlice.productList.find((product) => product.id === id)?.count
    );
    const dispatch = useDispatch();

    const incrementOnClick = () => {
        dispatch(incrementCount(id));
    };

    const decrementOnClick = () => {
        dispatch(decrementCount(id));
    };

    const countOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value === '0') dispatch(setCount({ id, count: 1 }));
        else if (value === '') dispatch(setCount({ id, count: 1 }));
        else if (/^[0-9][1-9]*$/.test(value)) dispatch(setCount({ id, count: Number(value) }));
    };

    if (!count) return null;

    return (
        <div className={styles.countControl}>
            <div className={styles.item}>
                <img src={minusImg} alt="" onClick={decrementOnClick} />
            </div>

            <div className={styles.item}>
                <input
                    value={count}
                    type="text"
                    maxLength={3}
                    minLength={1}
                    onChange={(e) => countOnChange(e)}
                />
            </div>

            <div className={styles.item}>
                <img src={plusImg} alt="" onClick={incrementOnClick} />
            </div>
        </div>
    );
};

export default CountControl;