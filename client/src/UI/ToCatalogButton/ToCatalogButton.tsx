import React from 'react';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../models/enums/EConstants';
import Text from '../Text/Text';
import catalogImg from '../../assets/images/catalog.png';
import styles from './ToCatalogButton.module.scss';

const ToCatalogButton = () => {
    return (
        <Link to={routeConstants.CATEGORIES_ROUTE} className={styles.toCatalog}>
            <img src={catalogImg} alt="" />
            <Text rus="Перейти в каталог" eng="Go to catalog" est="Mine kataloogi" />
        </Link>
    );
};

export default ToCatalogButton;
