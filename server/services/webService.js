import sql from 'mssql';

class WebService {
    async webTovarParameters({ tovar }) {
        const request = new sql.Request();

        request.input('tovar', sql.Int, tovar);

        const data = (await request.execute('[dbo].[web_tovar_parameters]')).recordset;

        const res = data.map((record) => record['']);

        return res;
    }
}

export default new WebService();
