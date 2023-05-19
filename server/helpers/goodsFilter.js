export function goodsFilter(data) {
    const setForFilter = new Set();
    const filteredData = [];

    data.forEach((item) => {
        //Collect the first records by id
        const has = setForFilter.has(item.id) ? true : false;
        setForFilter.add(item.id);

        if (has) {
            const index = filteredData.findIndex((product) => product.id === item.id);

            if (!item.src.startsWith('http'))
                filteredData[index].src.push(`${process.env.IMG_URL}/${item.brand}/${item.src}`);
            else filteredData[index].src = [item.src];
        } else {
            //Delete featurename
            delete item.featurename;

            //Create inStock
            item.inStock = item.inStockCount > 0 ? true : false;

            //If src is null
            if (item.src === null) item.src = 'http://undefind.ee';

            //Check src for URL otherwise create URL
            if (!item.src.startsWith('http'))
                item.src = [`${process.env.IMG_URL}/${item.brand}/${item.src}`];
            else item.src = [item.src];

            filteredData.push(item);
        }
    });

    return filteredData;
}
