import { IWebCartProductListRes } from '../../../models/interfaces/RTKQuery/IWebCartProductList';
import { IProductListFilters } from '../../../models/interfaces/slices/ISideBarState';

export function favoritesFilter(
    list: IWebCartProductListRes[],
    brands: string[],
    filters: IProductListFilters
) {
    const filteredList =
        brands.length === 0 ? list : list.filter((item) => brands.includes(item.brand));

    return filteredList.filter((product) => {
        let status = true;

        if (filters.inStock) status = product.inStock;

        return status;
    });
}
