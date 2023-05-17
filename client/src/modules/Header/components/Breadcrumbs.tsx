import React, { FC, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setMobileModalType } from '../../../redux/modalSlice';
import { RootState } from '../../../redux/store';
import { switchMobileModalDisplay } from '../../../redux/stylesSlice';
import { navProductApi } from '../../../services/navProductService';
import { IBreadcrumbs } from '../interfaces/IBreadcrumbs';

const Breadcrumbs: FC<IBreadcrumbs> = ({ styles }) => {
    const location = useLocation().pathname.split('/');
    const isLocation = location[1] === 'product';
    const lang = useSelector((state: RootState) => state.langSlice.lang);
    const id = Number(location[2]);
    const [updateProduct, { data: product, isFetching }] = navProductApi.useLazyFetchProductQuery();
    const category = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (category) => (isLocation ? category.id === product?.parentId : category.id === id)
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLocation) updateProduct({ id, lang });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const handleOnClick = () => {
        document.body.style.overflow = 'hidden';
        dispatch(setMobileModalType('breadcrumbs'));
        dispatch(switchMobileModalDisplay());
    };

    if (isFetching)
        return (
            <div className={styles.breadcrumbs}>
                <Skeleton containerClassName="skeleton" />
            </div>
        );

    return (
        <div className={styles.breadcrumbs} onClick={handleOnClick}>
            <div className={styles.breadcrumbsName}>{category?.routes.at(-1)?.name}</div>
            <div className={styles.symbolLast}> &#9660;</div>
        </div>
    );
};

export default Breadcrumbs;
