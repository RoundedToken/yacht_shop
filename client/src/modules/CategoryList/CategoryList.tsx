import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TId } from '../../models/types/TId';
import { RootState } from '../../redux/store';
import styles from './CategoryList.module.scss';
import CategoryItem from './components/CategoryItem';

const CategoryList = () => {
    const id = Number(useParams<TId>().id);
    const category = useSelector((state: RootState) => state.navSlice.categoryList).find(
        (category) => category.id === id
    );
    const brands = useSelector((state: RootState) => state.navSlice.brands);

    const haveCommon = (validator: string[], subject: string[]) => {
        for (let brand of subject) {
            if ([...validator].includes(brand)) return true;
        }
        return false;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    return (
        <div className={styles.categoryListContainer}>
            {category &&
                category.children &&
                category.children
                    .filter((child) =>
                        brands.length === 0 ? true : haveCommon(brands, child.brands)
                    )
                    .map((child) => (
                        <CategoryItem
                            key={child.id}
                            id={child.id}
                            hasChildren={child.children ? true : false}
                            parentId={child.parentId}
                            styles={styles}
                        >
                            {child.name}
                        </CategoryItem>
                    ))}
        </div>
    );
};

export default CategoryList;
