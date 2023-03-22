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
}

export default new WebController();
