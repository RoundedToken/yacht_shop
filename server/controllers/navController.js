import navService from '../services/navService.js';

class NavController {
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

    async navTree(req, res, next) {
        try {
            const reqData = req.query;

            const sqlResData = await navService.navTree(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }
}

export default new NavController();
