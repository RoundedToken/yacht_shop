import sql from 'mssql';
import { langParser } from '../helpers/langParser.js';
import { goodsFilter } from '../helpers/goodsFilter.js';

class WebService {
    async webTovarParameters({ tovar }) {
        const request = new sql.Request();

        request.input('tovar', sql.Int, tovar);

        const data = (await request.execute('[dbo].[web_tovar_parameters]')).recordset;

        const res = data.map((record) => record['']);

        return res;
    }

    async webCartProductList({ idList, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const data = await sql.query(
            `SELECT tovar as id ,${name} as name, brand, marka as code, priceEU as price, ostPARNU as inStockCount, dbo.[pic_of_tovar_small](tovar) as src from goods WHERE tovar in (${idList})`
        );

        return data.recordset;
    }

    async webSearch({ searchStr, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const formattedString = searchStr.split(' ').join('%');

        const data = (
            await sql.query(`
        SELECT 
        par.featurename,
        goods.tovar AS id,
        goods.marka AS code,
        goods.priceEU AS price,
        goods.OstPARNU AS rest,
        goods.brand,
        goods.${name} AS name,
        par.featurevalue AS src
        FROM goods INNER JOIN par ON goods.tovar = par.tovar
        WHERE goods.subr IS NOT NULL
        AND goods.avail<>0
        AND par.featurename LIKE 'pic%' 
        AND goods.${name} LIKE '%${formattedString}%'
        ORDER BY par.featurename`)
        ).recordset;

        //Collect the first records by id
        //Delete featurename
        //Create inStock
        //Check src for URL otherwise create URL
        const filteredData = goodsFilter(data);

        return filteredData;
    }
}

export default new WebService();
