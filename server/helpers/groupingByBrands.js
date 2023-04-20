export function groupingByBrands(arr) {
    const data = [];
    let previousId;

    for (let item of arr) {
        if (![33].includes(item.id)) {
            //Filter wrong categories
            let currentId = item.id;

            if (currentId === previousId) data[0].brands.push(item.brand.toLowerCase());
            else
                data.unshift({
                    id: item.id,
                    parentid: item.parentid,
                    name: item.name ? item.name : item.alterName,
                    brands: item.brand ? [item.brand.toLowerCase()] : [],
                });
            previousId = currentId;
        }
    }

    return data;
}
