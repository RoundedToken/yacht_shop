import sql from 'mssql';

class navService {
    async navChildrenOfSubr({ pId }) {
        const request = new sql.Request();

        request.input('pID', sql.Int, pId);
        request.output('str', sql.VarChar);

        const data = await request.execute('[dbo].[nav_children_of_subr]');

        const res = data.output.str.split(',').map((id) => {
            if (id !== '') return Number(id);
            return 0;
        });

        return res;
    }

    async navShowChildren({ id, brand, lang }) {
        const request = new sql.Request();

        request.input('ID', sql.Int, id);
        request.input('brand', sql.VarChar, brand);
        request.input('lang', sql.VarChar, lang);

        const data = await request.execute('[dbo].[nav_showChildren]');

        const res = data.recordset.map((record) => {
            const parsedRecord = {};
            const str = Object.entries(record)[0][1];
            if (!str) return record;

            parsedRecord.id = Number(str.match(/id=(.*?)(>)/)[1]);
            parsedRecord.name = str
                .substring(str.indexOf('<a'), str.indexOf('</a>') + 5)
                .match(/>(.*?)(<\/a>)/)[1];
            parsedRecord.src = str.match(/src="(.*)"  /)[1];
            parsedRecord.hasChildren = !str.includes('tlist=');

            return parsedRecord;
        });

        return res;
        return data;
    }

    async navGoodsList({ subr, brand, fw, inSubr, ip, lang }) {
        const request = new sql.Request();

        request.input('subr', sql.VarChar, subr.toString());
        request.input('b', sql.VarChar, brand);
        request.input('fw', sql.VarChar, fw);
        request.input('insubr', sql.Int, inSubr);
        request.input('IP', sql.VarChar, ip);
        request.input('lang', sql.VarChar, lang);

        const data = await request.execute('[dbo].[nav_goods_list]');

        const res = data.recordset.map((record) => {
            const parsedRecord = {};
            const inStock = record.Laos.match(/<b>(.*?)(<\/b>)/);

            parsedRecord.id = record.id;
            parsedRecord.name = record.Nimi;
            parsedRecord.brand = record.Katalog;
            parsedRecord.code = record.Kood;
            parsedRecord.eur = record.eur;
            parsedRecord.src = record.pic;
            parsedRecord.inStock = inStock ? true : false;

            return parsedRecord;
        });

        return res;
        return data;
    }

    async navShowTovar({ tovar, lang }) {
        const request = new sql.Request();

        request.input('tovar', sql.Int, tovar);
        request.input('lang', sql.VarChar, lang);

        const data = (await request.execute('[dbo].[nav_show_tovar]')).recordset[0];

        const res = {};
        res.name = data.name;
        res.code = data.marka;
        res.brand = data.brand;
        res.price = data.price;
        res.brandLogo = data.logo;
        res.inStockCount = data.ostSP;

        return res;
    }
}

export default new navService();
