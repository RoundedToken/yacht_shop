import sql from 'mssql';

class WebService {
    async webTovarParameters({ tovar }) {
        const request = new sql.Request();

        request.input('tovar', sql.Int, tovar);

        const data = (await request.execute('[dbo].[web_tovar_parameters]')).recordset;

        const res = data.map((record) => record['']);

        return res;
    }

    async webCartProductList({ idList, lang }) {
        const name =
            lang === 'rus'
                ? 'Name'
                : lang === 'eng'
                ? 'NameENG'
                : lang === 'est'
                ? 'NameEST'
                : null;

        if (!name) throw new Error();

        const data = await sql.query(
            `SELECT tovar as id ,${name} as name, brand, marka as code, priceEU as price, ostPARNU as inStockCount, dbo.[pic_of_tovar_small](tovar) as src from goods WHERE tovar in (${idList})`
        );

        return data.recordset;
    }
}

export default new WebService();
