export function formattingBrands(arr) {
    for (let item of arr) {
        item.brands = Array.from(new Set(item.brands.flat(Infinity)));

        //Create src
        item.src = `${process.env.CATEGORY_IMG_URL}/images/subr/${item.id}.${
            item.parentId === 0 ? 'gif' : 'jpg'
        }`;

        if (item.children) {
            formattingBrands(item.children); //Recursion
        }
    }
    arr.sort((a, b) => (a.name < b.name ? -1 : b.name < a.name ? 1 : 0));
}
