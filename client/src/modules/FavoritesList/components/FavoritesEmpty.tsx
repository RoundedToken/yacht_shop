import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import ToCatalogButton from '../../../UI/ToCatalogButton/ToCatalogButton';
import { IFavoritesEmpty } from '../interfaces/IFavoritesEmpty';
import heartImg from '../../../assets/images/heart.png';
import heartFilledImg from '../../../assets/images/heart_filled.png';
import arrowImg from '../../../assets/images/arrow.png';

const FavoritesEmpty: FC<IFavoritesEmpty> = ({ styles }) => {
    return (
        <div className={styles.favoritesEmpty}>
            <Text
                rus="У вас пока нет избранных товаров"
                eng="You don't have any favorite products yet"
                est="Teil pole veel lemmiktooteid"
            />
            <div className={styles.container}>
                <Text
                    rus="Вы можете добавить товары в избранное"
                    eng="You can add items to your favorites"
                    est="Saate lisada üksusi oma lemmikute hulka"
                />
                <img className={styles.heart} src={heartImg} alt="" />
                <img className={styles.arrow} src={arrowImg} alt="" />
                <img className={styles.heartFilled} src={heartFilledImg} alt="" />
            </div>
            <ToCatalogButton />
        </div>
    );
};

export default FavoritesEmpty;
