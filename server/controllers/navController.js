import navService from '../services/navService.js';

class navController {
    async navChildrenOfSubr(req, res, next) {
        try {
            const reqData = req.body;

            const sqlResData = await navService.navChildrenOfSubr(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async navShowChildren(req, res, next) {
        try {
            const reqData = req.body;

            const sqlResData = await navService.navShowChildren(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async navGoodsList(req, res, next) {
        try {
            const reqData = req.body;

            const sqlResData = await navService.navGoodsList(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }

    async navShowTovar(req, res, next) {
        try {
            const reqData = req.body;

            const sqlResData = await navService.navShowTovar(reqData);

            return res.json(sqlResData);
        } catch (error) {
            next(error);
        }
    }
}

export default new navController();
