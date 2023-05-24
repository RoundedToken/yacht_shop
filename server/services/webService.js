import sql from 'mssql';
import { langParser } from '../helpers/langParser.js';
import { goodsFilter } from '../helpers/goodsFilter.js';

class WebService {
    async webTovarParameters({ tovar }) {
        const request = new sql.Request();

        request.input('tovar', sql.Int, tovar);

        const data = (await request.execute('[dbo].[web_tovar_parameters_new]')).recordset;

        const res = data.map((record) => [record['n'], record[''][0]]);

        return res;
    }

    async webCartProductList({ idList, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const data = (
            await sql.query(
                `SELECT
            goods.tovar as id,
            goods.${name} as name, 
            goods.brand, 
            goods.marka as code, 
            goods.priceEU as price, 
            goods.ostPARNU as inStockCount, 
            par.featurevalue AS src,
            par.featurename
            FROM goods INNER JOIN par ON goods.tovar = par.tovar
            WHERE goods.tovar in (${idList}) 
            ORDER BY par.featurename`
            )
        ).recordset;

        const filteredData = goodsFilter(data);

        return filteredData;
    }

    async webSearch({ searchStr, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const condition = searchStr
            .split(' ')
            .map((str) => `goods.${name} LIKE '%${str}%'`)
            .join(' AND ');

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
        FROM goods LEFT JOIN par ON goods.tovar = par.tovar
        WHERE goods.subr IS NOT NULL
        AND goods.avail<>0
        AND ${condition}
        ORDER BY par.featurename`)
        ).recordset;

        //Collect the first records by id
        //Delete featurename
        //Create inStock
        //Check src for URL otherwise create URL
        const filteredData = goodsFilter(data);

        return filteredData;
    }

    async webOrder({ lang }, { name, email, comments, delivery, productList }) {
        const productName = langParser(lang);
        if (!name) throw new Error();

        const goodsStr = productList.map((product) => product.id).join(',');
        const qtyStr = productList.map((product) => product.count).join(',');
        const deliveryType = delivery === 'pickUp' ? 1 : 2;

        const request = new sql.Request();

        request.input('name', sql.VarChar, name);
        request.input('email', sql.VarChar, email);
        request.input('comments', sql.VarChar, comments);
        request.input('delivery', sql.Int, deliveryType);
        request.input('GoodsStr', sql.VarChar, goodsStr);
        request.input('QtyStr', sql.VarChar, qtyStr);

        const orderId = (await request.execute('[dbo].[web_make_order_new]')).recordset[0][''];

        const data = (
            await sql.query(`
        SELECT
        ordStr.tovar AS id,
        goods.${productName} AS name,
        goods.brand,
        goods.marka AS code,
        ordStr.price,
        ordStr.qty AS count
        FROM ordStr INNER JOIN goods ON ordStr.tovar = goods.tovar
        WHERE ordStr.orderID = ${orderId}
        `)
        ).recordset;

        return { orderId, orderList: data };
    }

    async webRelatedProducts({ id, lang }) {
        const name = langParser(lang);
        if (!name) throw new Error();

        const data = (
            await sql.query(`
        SELECT DISTINCT
        par.featurename,
        goods.tovar AS id,
        goods.marka AS code,
        goods.priceEU AS price,
        goods.OstPARNU AS rest,
        goods.brand,
        goods.${name} AS name,
        par.featurevalue AS src
        FROM goods LEFT JOIN par ON goods.tovar = par.tovar
        WHERE goods.tovar IN 
        (SELECT convert(int, value) FROM string_split((SELECT par.featurevalue FROM par WHERE par.tovar = ${id} AND par.featurename LIKE 'and'), ','))
        AND par.featurename LIKE 'pic' AND goods.avail<>0
        `)
        ).recordset;

        const filteredData = goodsFilter(data);

        return filteredData;
    }
}

export default new WebService();
