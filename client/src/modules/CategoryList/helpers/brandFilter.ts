import { INavTreeItem } from '../../../models/interfaces/RTKQuery/INavTree';

const haveCommon = (validator: string[], subject: string[]) => {
    for (let brand of subject) {
        if (validator.includes(brand)) return true;
    }
    return false;
};

export function brandFilter(categoryChildren: INavTreeItem[], brands: string[]) {
    return brands.length === 0
        ? categoryChildren
        : categoryChildren.filter((child) => haveCommon(brands, child.brands));
}
