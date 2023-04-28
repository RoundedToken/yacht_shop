export function sortByBrands(brands: string[] | undefined, selectedBrands: string[]) {
    return brands?.sort((a, b) =>
        selectedBrands.includes(a) && !selectedBrands.includes(b)
            ? -1
            : !selectedBrands.includes(a) && selectedBrands.includes(b)
            ? 1
            : a > b
            ? 1
            : b > a
            ? -1
            : 0
    );
}
