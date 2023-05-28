import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { routeConstants } from '../../../models/enums/EConstants';
import { RootState } from '../../../redux/store';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice';
import { navProductApi } from '../../../services/navProductService';
import Text from '../../../UI/Text/Text';
import { IBreadcrumbsModal } from '../interfaces/IBreadrumbsModal';
import ModalHeader from './ModalHeader';

const BreadcrumbsModal: FC<IBreadcrumbsModal> = ({ styles }) => {
    const location = useLocation().pathname.split('/');
    const isLocation = location[1] === 'product';
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const id = Number(location[2]);
    const [updateProduct, { data: product }] = navProductApi.useLazyFetchProductQuery();
    const category = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (category) => (isLocation ? category.id === product?.parentId : category.id === id)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLocation) updateProduct({ id, lang });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const closeOnclick = () => {
        document.body.style.overflow = 'auto';
        dispatch(switchMobileModalDisplay());
    };

    return (
        <div className={styles.content}>
            <ModalHeader
                styles={styles}
                title={<Text rus="Навигация" eng="Navigation" est="Navigeerimine" />}
            />

            <div className={styles.itemsContainer}>
                {category?.routes.map((route) => (
                    <Link
                        key={route.id}
                        onClick={closeOnclick}
                        to={
                            route.hasChildren
                                ? routeConstants.CATEGORIES_ROUTE + `/${route.id}`
                                : routeConstants.PRODUCT_LIST_ROUTE + `/${route.id}`
                        }
                        className={styles.item}
                    >
                        {route.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BreadcrumbsModal;
