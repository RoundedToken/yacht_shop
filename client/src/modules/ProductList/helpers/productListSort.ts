import { sortByType } from '../../../helpers/sortByType';
import { IProductListSorting } from '../../../models/interfaces/slices/ISideBarState';
import { INavProductListRes } from './../../../models/interfaces/RTKQuery/INavProductList';

export function productListSort(list: INavProductListRes[], sortRules: IProductListSorting) {
    return list.slice().sort((a, b) => {
        if (sortRules.sortKey === 'brand') {
            const brandA = a.brand.toLowerCase();
            const brandB = b.brand.toLowerCase();

            return sortByType(brandA, brandB, sortRules.sortType);
        }

        return sortByType(a[sortRules.sortKey], b[sortRules.sortKey], sortRules.sortType);
    });
}
