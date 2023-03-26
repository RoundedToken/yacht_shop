import navService from '../services/navService.js';

class NavController {
    async navChildrenOfSubr(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await navService.navChildrenOfSubr(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async navShowChildrenPlain(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await navService.navShowChildrenPlain(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async navGoodsList(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await navService.navGoodsList(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async navShowTovar(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await navService.navShowTovar(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async navBrandsOfSubrPlain(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await navService.navBrandsOfSubrPlain(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }
}

export default new NavController();
