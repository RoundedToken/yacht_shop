import sql from 'mssql';
import { buildHierarchy } from '../helpers/buildHierarchy.js';
import { formattingBrands } from '../helpers/formattingBrands.js';
import { goodsFilter } from '../helpers/goodsFilter.js';
import { groupingByBrands } from '../helpers/groupingByBrands.js';
import { langParser } from '../helpers/langParser.js';

class navService {
    async navGoodsList({ id, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const data = (
            await sql.query(
                `SELECT DISTINCT 
                par.featurename,
                goods.tovar AS id, 
                goods.marka AS code, 
                goods.priceEU AS price, 
                goods.OstPARNU AS rest, goods.brand, 
                goods.${name} AS name, 
                par.featurevalue AS src 
                FROM goods INNER JOIN par ON goods.tovar = par.tovar 
                WHERE goods.subr=${id} AND goods.avail<>0 AND par.featurename LIKE 'pic%'
                ORDER BY par.featurename`
            )
        ).recordset;

        //Collect the first records by id
        //Delete featurename
        //Create inStock
        //Check src for URL otherwise create URL
        const filteredData = goodsFilter(data);

        return filteredData;
    }

    async navShowTovar({ id, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const data = (
            await sql.query(
                `SELECT subr AS parentId, ${name} AS name, marka AS code, brand, priceEU AS price, ostParnu AS inStockCount FROM goods WHERE tovar = ${id}`
            )
        ).recordset[0];

        data.brandLogo = `${process.env.BRAND_IMG_URL}/${data.brand}.gif`;

        return data;
    }

    async navTree({ lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        let data = (
            await sql.query(
                `SELECT DISTINCT nav.id, nav.parentid, nav.${name} AS name, nav.name AS alterName, goods.brand FROM nav LEFT JOIN goods ON (goods.subr = nav.id AND goods.avail<>0) WHERE (nav.id IN (SELECT DISTINCT subr FROM goods WHERE avail<>0) OR nav.id IN (SELECT DISTINCT parentid FROM nav1 WHERE id IN (SELECT DISTINCT subr FROM goods WHERE avail<>0)))`
            )
        ).recordset;

        //Grouping by brands and filter wrong categories
        data = groupingByBrands(data);

        //Build the hierarchy
        const tree = buildHierarchy(data);

        //Formatting brands and sort by name
        formattingBrands(tree);

        return tree;
    }
}

export default new navService();
