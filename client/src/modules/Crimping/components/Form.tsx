import React, { FC } from 'react';
import RopeDiameter from './RopeDiameter';
import RopeLength from './RopeLength';
import RopeEnds from './RopeEnds';
import Text from '../../../UI/Text/Text';
import { IForm } from '../interfaces/IForm';

const Form: FC<IForm> = ({ styles, onSubmit }) => {
    return (
        <form id="crimpingForm" className={styles.formContainer} onSubmit={onSubmit}>
            <div className={styles.formTitle}>
                <Text
                    rus="Калькулятор обжима тросов"
                    eng="Rope crimp calculator"
                    est="Trossi kokkupressimise kalkulaator"
                />
            </div>

            <div className={styles.diameterAndLengthContainer}>
                <div className={styles.diameterAndLengthContainerTitle}>
                    <div>&#9658;</div>
                    <Text
                        rus="Выберите диаметр и длину троса"
                        eng="Select rope diameter and length"
                        est="Valige trossi läbimõõt ja pikkus"
                    />
                </div>

                <RopeDiameter styles={styles} />

                <RopeLength styles={styles} />
            </div>

            <div className={styles.breakLine} />

            <RopeEnds styles={styles} />
        </form>
    );
};

export default Form;
