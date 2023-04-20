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
                `SELECT DISTINCT goods.tovar AS id, goods.marka AS code, goods.priceEU AS price, goods.OstPARNU AS rest, goods.brand, goods.${name} AS name, par.featurevalue AS src FROM goods INNER JOIN par ON goods.tovar = par.tovar WHERE goods.subr=${id} AND goods.avail<>0 AND par.featurename LIKE 'pic%'`
            )
        ).recordset;

        //Collect the first records by id
        //Create inStock
        //Check src for URL otherwise create URL
        const filteredData = goodsFilter(data);

        return filteredData;
    }

    async navShowTovar({ tovar, lang }) {
        const request = new sql.Request();

        request.input('tovar', sql.Int, tovar);
        request.input('lang', sql.VarChar, lang);

        const data = (await request.execute('[dbo].[nav_show_tovar]')).recordset[0];

        const image = data.logo ? data.logo.match(/src=\"(.*?)\"/) : null;

        const res = {};
        res.name = data.name;
        res.code = data.marka;
        res.brand = data.brand;
        res.price = data.price;
        res.brandLogo = image ? `${process.env.BRAND_IMG_URL}/${image[1]}` : null;
        res.inStockCount = data.ostSP;

        return res;
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
