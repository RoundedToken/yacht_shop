export function formattingBrands(arr) {
    for (let item of arr) {
        item.brands = Array.from(new Set(item.brands.flat(Infinity)));
        if (item.children) {
            formattingBrands(item.children); //Recursion
        }
    }
    arr.sort((a, b) => (a.name < b.name ? -1 : b.name < a.name ? 1 : 0));
}
