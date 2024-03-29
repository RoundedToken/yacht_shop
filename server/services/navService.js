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
                goods.${name} AS name,
                goods.brand,
                goods.marka AS code,
                goods.priceEU AS price,
                goods.OstPARNU AS inStockCount,
                par.featurevalue AS src,
                goods.decimal AS isDecimals
                FROM goods LEFT JOIN par ON goods.tovar = par.tovar
                WHERE goods.subr=${id} AND goods.avail<>0 
                ORDER BY par.featurename`
            )
        ).recordset;

        const filteredData = goodsFilter(data);

        return filteredData;
    }

    async navShowTovar({ id, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const data = (
            await sql.query(
                `SELECT DISTINCT
                goods.tovar AS id,
                goods.subr AS parentId, 
                goods.${name} AS name, 
                goods.marka AS code, 
                goods.brand, 
                goods.priceEU AS price, 
                goods.ostParnu AS inStockCount,
                par.featurevalue AS src,
                par.featurename,
                goods.decimal AS isDecimals 
                FROM goods LEFT JOIN par ON goods.tovar = par.tovar
                WHERE goods.tovar = ${id}
                ORDER BY par.featurename`
            )
        ).recordset;

        const countRelatedData = (
            await sql.query(
                `
            (SELECT COUNT(convert(int, value)) AS relatedCount FROM string_split((SELECT par.featurevalue FROM par WHERE par.tovar = ${id} AND par.featurename LIKE 'and'), ','))`
            )
        ).recordset;

        data[0].brandLogo = `${process.env.BRAND_IMG_URL}/${data[0].brand}.png`;

        const filteredData = goodsFilter(data);
        filteredData[0].relatedCount = countRelatedData[0].relatedCount;

        return filteredData[0];
    }

    async navTree({ lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        let data = (
            await sql.query(
                `SELECT DISTINCT
                nav.id,
                nav.parentid,
                nav.${name} AS name,
                nav.name AS alterName,
                goods.brand,
                COUNT(goods.tovar) AS productCount
                FROM nav LEFT JOIN goods ON (goods.subr = nav.id AND goods.avail<>0)
                WHERE (nav.id IN (SELECT DISTINCT subr FROM goods WHERE avail<>0)
                OR nav.id IN (SELECT DISTINCT parentid
                FROM nav WHERE id IN (SELECT DISTINCT subr FROM goods WHERE avail<>0)))
                GROUP BY nav.id, nav.parentid, nav.${name}, nav.name, goods.brand
                ORDER BY nav.id`
            )
        ).recordset;

        //Grouping by id and uniting together brands and productCount
        data = groupingByBrands(data);
        //Build the hierarchy
        const tree = buildHierarchy(data);
        console.log('tree', tree);
        //Formatting brands and sort by name and creating src
        formattingBrands(tree);

        return tree;
    }
}

export default new navService();
