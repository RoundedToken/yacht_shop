import { sortByType } from '../../../helpers/sortByType';
import { IProductListSorting } from '../../../models/interfaces/slices/ISideBarState';
import { INavProductListRes } from './../../../models/interfaces/RTKQuery/INavProductList';

export function productListSort(list: INavProductListRes[], sortRules: IProductListSorting) {
    return list.slice().sort((a, b) => {
        return sortByType(a[sortRules.sortKey], b[sortRules.sortKey], sortRules.sortType);
    });
}
