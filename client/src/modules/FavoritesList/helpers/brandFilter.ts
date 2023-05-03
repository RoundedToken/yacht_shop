import { IWebCartProductListRes } from './../../../models/interfaces/RTKQuery/IWebCartProductList';

export function brandFilter(list: IWebCartProductListRes[], brands: string[]) {
    return list.filter((product) =>
        brands.length === 0
            ? true
            : [...brands].includes(
                  (list.find((item) => item.id === product.id)?.brand || '').toLowerCase()
              )
    );
}
