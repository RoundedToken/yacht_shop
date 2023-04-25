export function goodsFilter(data) {
    const setForFilter = new Set();

    return data.filter((item) => {
        //Collect the first records by id
        const has = setForFilter.has(item.id) ? true : false;
        setForFilter.add(item.id);

        if (has) return false;
        else {
            //Delete featurename
            delete item.featurename;

            //Create inStock
            item.inStock = item.rest > 0 ? true : false;

            //Check src for URL otherwise create URL
            if (!item.src.startsWith('http'))
                item.src = `${process.env.IMG_URL}/${item.brand}/${item.src}`;
            return true;
        }
    });
}
