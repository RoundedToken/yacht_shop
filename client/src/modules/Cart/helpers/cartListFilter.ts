import { IWebCartProductListRes } from './../../../models/interfaces/RTKQuery/IWebCartProductList';
import { ICartListFilters } from './../../../models/interfaces/slices/ISideBarState';
import { ICartProduct } from '../../../models/interfaces/slices/ICartState';

export function cartListFilter(
    cartList: ICartProduct[],
    brands: string[],
    filters: ICartListFilters,
    favoritesList: number[],
    data: IWebCartProductListRes[]
) {
    const filteredList =
        brands.length === 0 ? cartList : cartList.filter((item) => brands.includes(item.brand));

    return filteredList.filter((product) => {
        let status = true;
        const dataProduct = data.find((p) => product.id === p.id) as IWebCartProductListRes;

        if (filters.inStock) status = dataProduct.inStock;

        return status;
    });
}
