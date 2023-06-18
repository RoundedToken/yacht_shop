import React, { FC, useState } from 'react';
import Text from '../../../UI/Text/Text';
import { IRopeLength } from '../interfaces/IRopeLength';

const RopeLength: FC<IRopeLength> = ({ styles }) => {
    const [meters, setMeters] = useState('0');
    const [centimeters, setCentimeters] = useState('0');

    //VALIDATE
    const metersOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isValid = /^[0-9]*$/.test(value) && value.length < 4;
        if (isValid) setMeters(value);
    };
    const centimetersOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const isValid = /^[0-9]?[1-9]?$/.test(value);
        if (isValid) setCentimeters(value);
    };
    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    return (
        <div className={styles.ropeLengthContainer}>
            <Text rus="Длина троса" eng="Rope length" est="Trossi pikkus" />

            <input
                value={meters}
                onChange={(e) => metersOnChange(e)}
                onFocus={(e) => inputOnFocus(e)}
                type="tel"
                name="meters"
                required
            />
            <label htmlFor="meters">
                <Text rus="м" eng="m" est="m" />
            </label>

            <input
                value={centimeters}
                onChange={(e) => centimetersOnChange(e)}
                onFocus={(e) => inputOnFocus(e)}
                type="tel"
                name="centimeters"
                required
            />
            <label htmlFor="centimeters">
                <Text rus="см" eng="cm" est="cm" />
            </label>
        </div>
    );
};

export default RopeLength;
