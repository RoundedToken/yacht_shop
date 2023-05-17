import React from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import Text from '../Text/Text';
import catalogImg from '../../assets/images/catalog.svg';
import styles from './ToCatalogButton.module.scss';

const ToCatalogButton = () => {
    return (
        <Link to={routeConstants.CATEGORIES_ROUTE} className={styles.toCatalog}>
            <div className={styles.imgContainer}>
                <img src={catalogImg} alt="" />
            </div>
            <Text rus="К товарам" eng="To the goods" est="Kauba juurde" />
        </Link>
    );
};

export default ToCatalogButton;
