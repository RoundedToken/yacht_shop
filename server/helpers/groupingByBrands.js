export function groupingByBrands(arr) {
    const data = [];
    let previousId;

    for (let item of arr) {
        if (
            ![
                /* 33, 461 */
            ].includes(item.id)
        ) {
            //Filter wrong categories
            let currentId = item.id;

            if (currentId === previousId) data[0].brands.push(item.brand);
            else
                data.unshift({
                    id: item.id,
                    parentid: item.parentid,
                    name: item.name ? item.name : item.alterName,
                    brands: item.brand ? [item.brand] : [],
                });
            previousId = currentId;
        }
    }

    return data;
}
