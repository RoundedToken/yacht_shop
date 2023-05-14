import { sortByType } from '../../../helpers/sortByType';
import { ICategorySorting } from '../../../models/interfaces/slices/ISideBarState';
import { INavTreeItem } from '../../../models/interfaces/RTKQuery/INavTree';

export function categorySort(categories: INavTreeItem[], sortRules: ICategorySorting) {
    return categories.slice().sort((a, b) => {
        return sortByType(a[sortRules.sortKey], b[sortRules.sortKey], sortRules.sortType);
    });
}
