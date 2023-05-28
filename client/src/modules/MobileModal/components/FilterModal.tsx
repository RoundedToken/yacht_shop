import React, { FC } from 'react';
import Text from '../../../UI/Text/Text';
import ModalHeader from './ModalHeader';
import Filter from '../../Filter/Filter';
import Sorting from '../../Sorting/Sorting';
import BrandSelect from '../../BrandSelect/BrandSelect';
import { useLocation } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';

export interface IFilterModal {
    styles: {
        readonly [key: string]: string;
    };
}

const FilterModal: FC<IFilterModal> = ({ styles }) => {
    const location = '/' + useLocation().pathname.split('/')[1];

    return (
        <div className={styles.content}>
            <ModalHeader
                styles={styles}
                title={<Text rus="Фильтры" eng="Filters" est="Filtrid" />}
            />

            {(routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.CART_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location ||
                routeConstants.FAVORITES_ROUTE === location) && (
                <>
                    <Filter />
                    <hr />
                </>
            )}

            {(routeConstants.CATEGORIES_ROUTE === location ||
                routeConstants.PRODUCT_LIST_ROUTE === location ||
                routeConstants.SEARCH_ROUTE === location ||
                routeConstants.CART_ROUTE === location ||
                routeConstants.FAVORITES_ROUTE === location) && (
                <>
                    <Sorting />
                    <hr />
                    <BrandSelect />
                </>
            )}
        </div>
    );
};

export default FilterModal;
