import { IWebCartProductListRes } from './../../../models/interfaces/RTKQuery/IWebCartProductList';
import { ICartProduct } from '../../../models/interfaces/slices/ICartState';
import { ICartSorting } from '../../../models/interfaces/slices/ISideBarState';
import { sortByType } from '../../../helpers/sortByType';

export function cartSort(
    cartList: ICartProduct[],
    data: IWebCartProductListRes[],
    sortRules: ICartSorting
) {
    return cartList.slice().sort((a, b) => {
        const newA = data.find((item) => item.id === a.id) as IWebCartProductListRes;
        const newB = data.find((item) => item.id === b.id) as IWebCartProductListRes;
        const key = sortRules.sortKey;

        if (key === 'name' || key === 'brand') {
            const strA = newA[key].toLowerCase();
            const strB = newB[key].toLowerCase();

            return sortByType(strA, strB, sortRules.sortType);
        } else if (key === 'price') {
            const numA = newA[key];
            const numB = newB[key];

            return sortByType(numA, numB, sortRules.sortType);
        } else if (key === 'count') {
            return sortByType(a.count, b.count, sortRules.sortType);
        } else if (key === 'sum') {
            const numA = a.count * a.price;
            const numB = b.count * b.price;

            return sortByType(numA, numB, sortRules.sortType);
        } else return 0;
    });
}
