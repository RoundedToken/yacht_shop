import sql from 'mssql';

class navService {
    async navChildrenOfSubr({ pId }) {
        const request = new sql.Request();

        request.input('pID', sql.Int, pId);
        request.output('str', sql.VarChar);

        const data = await request.execute('[dbo].[nav_children_of_subr]');

        const res = data.output.str.split(',').map((id) => {
            if (id !== '') return Number(id);
        });

        return res;
    }

    async navShowChildrenPlain({ id, brand, lang }) {
        const request = new sql.Request();

        request.input('ID', sql.Int, id);
        request.input('brand', sql.VarChar, brand);
        request.input('lang', sql.VarChar, lang);

        const data = await request.execute('[dbo].[nav_showChildren_plain]');

        const res = data.recordset.map((record) => {
            const parsedRecord = {};

            parsedRecord.id = record.id;
            parsedRecord.name = record.Категория;
            parsedRecord.src = `${process.env.IMG_URL}/images/subr/${record.id}.${
                id === '0' ? 'gif' : 'jpg'
            }`;
            parsedRecord.hasChildren = record.tlist === '1' ? false : true;

            return parsedRecord;
        });

        return res;
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

            parsedRecord.id = record.id;
            parsedRecord.name = record.Nimi;
            parsedRecord.brand = record.Katalog;
            parsedRecord.code = record.Kood;
            parsedRecord.price = record.EUR;
            parsedRecord.src = record.pic;
            parsedRecord.inStock = record.Laos === 'ON' ? true : false;

            return parsedRecord;
        });

        return res;
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
        res.brandLogo = image ? `${process.env.IMG_URL}/${image[1]}` : null;
        res.inStockCount = data.ostSP;

        return res;
    }

    async navBrandsOfSubrPlain({ subr }) {
        const request = new sql.Request();

        request.input('subr', sql.VarChar, subr.toString());

        const data = (await request.execute('[dbo].[nav_brands_of_subr_plain]')).recordset;

        return data;
    }
}

export default new navService();
