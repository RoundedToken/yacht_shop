import { TSort } from './../models/types/TSort';

export function sortByType(a: string | number, b: string | number, type: TSort) {
    if (type === 'ASC') {
        if (a > b) return 1;
        else if (b > a) return -1;
        else return 0;
    } else {
        if (a < b) return 1;
        else if (b < a) return -1;
        else return 0;
    }
}
