import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import ToCatalogButton from '../../../UI/ToCatalogButton/ToCatalogButton';
import { IFavoritesEmpty } from '../interfaces/IFavoritesEmpty';
import starImg from '../../../assets/images/buttonStar.svg';
import starFilledImg from '../../../assets/images/buttonStarFilled.svg';
import arrowImg from '../../../assets/images/arrow.png';

const FavoritesEmpty: FC<IFavoritesEmpty> = ({ styles }) => {
    return (
        <div className={styles.favoritesEmpty}>
            <Text
                rus="Вы еще не выбрали товары..."
                eng="You haven't chosen any products yet..."
                est="Te pole veel ühtegi toodet valinud..."
            />

            <span>
                <Text
                    rus="Добавьте товары в избранное"
                    eng="Add products to your favorites"
                    est="Lisage tooteid oma lemmikute hulka"
                />
            </span>

            <div className={styles.imgContainer}>
                <img className={styles.heart} src={starImg} alt="" />
                <img className={styles.arrow} src={arrowImg} alt="" />
                <img className={styles.heartFilled} src={starFilledImg} alt="" />
            </div>
            <ToCatalogButton />
        </div>
    );
};

export default FavoritesEmpty;
