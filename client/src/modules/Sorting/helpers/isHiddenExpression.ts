import {
    ICartSorting,
    ICategorySorting,
    IFavoritesSorting,
    IProductListSorting,
} from '../../../models/interfaces/slices/ISideBarState';

export function isHiddenExpression(
    a: ICartSorting,
    b: ICategorySorting,
    c: IProductListSorting,
    d: IFavoritesSorting
) {
    return (
        a.sortKey === 'name' &&
        a.sortType === 'ASC' &&
        b.sortKey === 'name' &&
        b.sortType === 'ASC' &&
        c.sortKey === 'name' &&
        c.sortType === 'ASC' &&
        d.sortKey === 'name' &&
        d.sortType === 'ASC'
    );
}
