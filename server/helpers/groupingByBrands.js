export function groupingByBrands(arr) {
    const data = [];
    let previousId;

    for (let item of arr) {
        let currentId = item.id;

        if (currentId === previousId) {
            data[0].brands.push(item.brand);
            data[0].productCount += item.productCount;
        } else
            data.unshift({
                id: item.id,
                parentid: item.parentid,
                name: item.name ? item.name : item.alterName,
                brands: item.brand ? [item.brand] : [],
                productCount: item.productCount,
            });
        previousId = currentId;
    }

    return data;
}
