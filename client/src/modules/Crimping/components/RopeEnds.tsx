import React, { FC } from 'react';
import RadioButton from '../../../UI/RadioButton/RadioButton';
import Text from '../../../UI/Text/Text';
import eyeImg from '../../../assets/images/eye.jpg';
import forkImg from '../../../assets/images/fork.jpg';
import toggleImg from '../../../assets/images/toggle.jpg';
import tImg from '../../../assets/images/t.jpg';
import threadImg from '../../../assets/images/thread.jpg';
import turnbuckleImg from '../../../assets/images/turnbuckle.jpg';
import { IRopeEnds } from '../interfaces/IRopeEnds';
import turnbuckleToggleImg from '../../../assets/images/turnbuckleToggle.jpg';

const RopeEnds: FC<IRopeEnds> = ({ styles }) => {
    return (
        <div className={styles.ropeEndsContainer}>
            <div className={styles.ropeEndsContainerTitle}>
                <div>&#9658;</div>
                <Text
                    rus="Выберите насадки на трос"
                    eng="Select cable attachments"
                    est="Valige kaabli kinnitused"
                />
            </div>

            <div className={styles.titleGroup}>
                <Text rus="Наконечники" eng="Tips" est="Näpunäiteid" />

                <div className={styles.titleGroupItem}>
                    <img src={eyeImg} alt="" />
                    <Text rus="Ухо" eng="Eye" est="Aas" />
                </div>
                <div className={styles.titleGroupItem}>
                    <img src={forkImg} alt="" />
                    <Text rus="Вилка" eng="Fork" est="Kahvel" />
                </div>
                <div className={styles.titleGroupItem}>
                    <img src={toggleImg} alt="" />
                    <Text rus="Вилка качающаяся" eng="Toggle" est="Kahvel toggle" />
                </div>
                <div className={styles.titleGroupItem}>
                    <img src={tImg} alt="" />
                    <Text rus="Т-терминал" eng="T-terminal" est="T-terminaal" />
                </div>
                <div className={styles.titleGroupItem}>
                    <img src={threadImg} alt="" />
                    <Text rus="Резьба правая" eng="Thread right" est="Parempoolne niit" />
                </div>
                <div className={styles.titleGroupItem}>
                    <img src={threadImg} alt="" />
                    <Text rus="Резьба левая" eng="Thread left" est="	Vasak niit" />
                </div>
                <div className={styles.titleGroupItem}>
                    <img src={turnbuckleImg} alt="" />
                    <Text rus="Талреп" eng="Turnbuckle" est="Talrep" />
                </div>
                <div className={styles.titleGroupItem}>
                    <img src={turnbuckleToggleImg} alt="" />
                    <Text rus="Талреп-качалка" eng="Turnbuckle-toggle" est="Talrep-toggle" />
                </div>
            </div>

            <div className={styles.end1Group}>
                <Text rus="I конец" eng="I end" est="I ots" />

                <div className={styles.radioContainer}>
                    <RadioButton value="eye" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="fork" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="toggle" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="t" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_right" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_left" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle" name="end1" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle_toggle" name="end1" />
                </div>
            </div>

            <div className={styles.end2Group}>
                <Text rus="II конец" eng="II end" est="II ots" />

                <div className={styles.radioContainer}>
                    <RadioButton value="eye" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="fork" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="toggle" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="t" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_right" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="thread_left" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle" name="end2" />
                </div>
                <div className={styles.radioContainer}>
                    <RadioButton value="turnbuckle_toggle" name="end2" />
                </div>
            </div>
        </div>
    );
};

export default RopeEnds;
