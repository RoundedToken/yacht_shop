import { IProductListFilters } from './../../../models/interfaces/slices/ISideBarState';
import { INavProductListRes } from './../../../models/interfaces/RTKQuery/INavProductList';
import { ICartProduct } from '../../../models/interfaces/slices/ICartState';

export function productListFilter(
    list: INavProductListRes[],
    brands: string[],
    cartList: ICartProduct[],
    filters: IProductListFilters,
    favoritesList: number[]
) {
    const filteredList =
        brands.length === 0 ? list : list.filter((item) => brands.includes(item.brand));

    return filteredList.filter((product) => {
        let status = true;

        if (filters.inStock) status = product.inStock;

        return status;
    });
}
