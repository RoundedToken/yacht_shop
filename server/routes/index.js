import { Router } from 'express';
import navController from '../controllers/navController.js';
import webController from '../controllers/webController.js';

const router = new Router();

router.get('/nav_children_of_subr', navController.navChildrenOfSubr);
router.get('/nav_showChildren', navController.navShowChildren);
router.get('/nav_goods_list', navController.navGoodsList);
router.get('/nav_show_tovar', navController.navShowTovar);
router.get('/nav_brands_of_subr', navController.navBrandsOfSubr);

router.get('/web_tovar_parameters', webController.webTovarParameters);

export default router;
