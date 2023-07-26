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

            const sqlResData = await webService.webOrder(reqParams, reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async webSearch(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await webService.webSearch(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async webRelatedProducts(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await webService.webRelatedProducts(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async webCrimping(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await webService.webCrimping(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async webNews(req, res, next) {
        try {
            const reqData = req.query;
            const sqlResData = await webService.webNews(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }
}

export default new WebController();
