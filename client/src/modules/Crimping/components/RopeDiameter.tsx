import React, { FC } from 'react';
import RadioButton from '../../../UI/RadioButton/RadioButton';
import Text from '../../../UI/Text/Text';
import { IRopeDiameter } from '../interfaces/IRopeDiameter';

const RopeDiameter: FC<IRopeDiameter> = ({ styles }) => {
    return (
        <div className={styles.ropeDiameterContainer}>
            <div className={styles.ropeDiameterContainerTitle}>
                <Text
                    rus={`Диаметр 
                    троса\u{2002}(мм)`}
                    eng={`Rope
                    diameter\u{2002}(mm)`}
                    est={`Trossi
                    läbimõõt\u{2002}(mm)`}
                />
            </div>

            <div className={styles.ropeDiameterContainerGroup}>
                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="14px" height="14px" name="diameter" value="2.5" />
                    <span>2.5</span>
                </div>

                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="16px" height="16px" name="diameter" value="3" />
                    <span>3</span>
                </div>

                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="18px" height="18px" name="diameter" value="4" />
                    <span>4</span>
                </div>

                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="20px" height="20px" name="diameter" value="46" />
                    <span>4/6</span>
                </div>

                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="22px" height="22px" name="diameter" value="5" />
                    <span>5</span>
                </div>

                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="24px" height="24px" name="diameter" value="6" />
                    <span>6</span>
                </div>

                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="26px" height="26px" name="diameter" value="7" />
                    <span>7</span>
                </div>

                <div className={styles.ropeDiameterContainerGroupItem}>
                    <RadioButton width="28px" height="28px" name="diameter" value="8" />
                    <span>8</span>
                </div>
            </div>
        </div>
    );
};

export default RopeDiameter;
