import React, { FC } from 'react';
import { ISearchMenu } from '../interfaces/ISearchMenu';
import loupeImg from '../../../assets/HeaderImg/loupe.png';
import Text from '../../Text/Text';
import infoImg from '../../../assets/HeaderImg/info.png';

const SearchMenu: FC<ISearchMenu> = ({ styles }) => {
    const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchMenu} onSubmit={(e) => formOnSubmit(e)}>
            <img src={loupeImg} alt="" />

            <input type="text" minLength={4} required />

            <button type="submit">
                <Text rus="Искать" eng="Search" est="Otsing" />
            </button>

            <input type="checkbox" name="global" defaultChecked />
            <label htmlFor="global">
                <Text rus="Глобальный поиск" eng="Global search" est="Globaalne otsing" />
            </label>

            <img src={infoImg} alt="" className={styles.info} />

            <Text
                rus={
                    <p>
                        например: "необр син" - найдутся <b>необр</b>астающие краски <b>син</b>их
                        цветов
                    </p>
                }
                eng={
                    <p>
                        example: "antif blu" - will be found <b>antif</b>ouling paints of <b>blu</b>
                        e colors
                    </p>
                }
                est={
                    <p>
                        naiteks: "antif sin" - will be found <b>antif</b>ouling of <b>sin</b>ine
                        varvi
                    </p>
                }
            />
        </form>
    );
};

export default SearchMenu;
