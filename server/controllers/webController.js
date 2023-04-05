import webService from '../services/webService.js';

class WebController {
    async webTovarParameters(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await webService.webTovarParameters(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async webCartProductList(req, res, next) {
        try {
            const reqData = req.query;

            if (reqData.idList === '') return res.json(null);

            const sqlResData = await webService.webCartProductList(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async webOrder(req, res, next) {
        try {
            const reqParams = req.query;
            const reqData = req.body;

            console.log(reqData);

            return res.json('Ваш заказ получен!');
        } catch (error) {
            next(error);
        }
    }
}

export default new WebController();
