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
        brands.length === 0
            ? list
            : list.filter((item) => brands.includes(item.brand.toLowerCase()));

    return filteredList
        .filter((product) => {
            let status = true;

            if (filters.inCart && !filters.notInCart)
                status = cartList.some((cartProduct) => cartProduct.id === product.id);
            else if (filters.notInCart && !filters.inCart)
                status = !cartList.some((cartProduct) => cartProduct.id === product.id);

            return status;
        })
        .filter((product) => {
            let status = true;

            if (filters.inStock && !filters.notInStock) status = product.inStock;
            else if (filters.notInStock && !filters.inStock) status = !product.inStock;

            return status;
        })
        .filter((product) => {
            let status = true;

            if (filters.inFavorites && !filters.notInFavorites)
                status = favoritesList.includes(product.id);
            else if (filters.notInFavorites && !filters.inFavorites)
                status = !favoritesList.includes(product.id);

            return status;
        });
}
