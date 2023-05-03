import { ICartListFilters } from './../../../models/interfaces/slices/ISideBarState';
import { ICartProduct } from '../../../models/interfaces/slices/ICartState';

export function cartListFilter(
    cartList: ICartProduct[],
    brands: string[],
    filters: ICartListFilters,
    favoritesList: number[]
) {
    const filteredList =
        brands.length === 0
            ? cartList
            : cartList.filter((item) => brands.includes(item.brand.toLowerCase()));

    return filteredList.filter((product) => {
        let status = true;

        if (filters.inFavorites && !filters.notInFavorites)
            status = favoritesList.includes(product.id);
        else if (filters.notInFavorites && !filters.inFavorites)
            status = !favoritesList.includes(product.id);

        return status;
    });
}
