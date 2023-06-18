import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICountControl } from './ICountControl';
import { decrementCount, incrementCount, setCount } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import styles from './CountControl.module.scss';

const CountControl: FC<ICountControl> = ({ id, isDecimals }) => {
    const count = useSelector(
        (state: RootState) =>
            state.cartSlice.productList.find((product) => product.id === id)?.count
    );
    const [decimalsValue, setDecimalsValue] = useState(`${count}`);
    const dispatch = useDispatch();

    useEffect(() => {
        setDecimalsValue(`${count}`);
    }, [count]);

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
    const countDecimalsOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*[.]?\d{0,2}$/.test(value)) setDecimalsValue(value);
    };
    const countOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const value = e.target.value;

        if (Number(value) === 0 || value === '') {
            setDecimalsValue('0.5');
            dispatch(setCount({ id, count: 0.5 }));
        } else {
            setDecimalsValue(`${Number(value)}`);
            dispatch(setCount({ id, count: Number(value) }));
        }
    };

    if (!count) return null;

    if (!isDecimals)
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

    return (
        <>
            <div className={styles.countControl}>
                <div className={styles.itemDecimals}>
                    <input
                        value={decimalsValue}
                        type="tel"
                        maxLength={6}
                        minLength={1}
                        onBlur={(e) => countOnBlur(e)}
                        onChange={(e) => countDecimalsOnChange(e)}
                    />
                </div>
            </div>
        </>
    );
};

export default CountControl;
