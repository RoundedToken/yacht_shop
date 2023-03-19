import { Router } from 'express';
import sql from 'mssql';
import navController from '../controllers/navController.js';

const router = new Router();

router.get('/nav_children_of_subr', navController.navChildrenOfSubr);
router.get('/nav_showChildren', navController.navShowChildren);
router.get('/nav_goods_list', navController.navGoodsList);
router.get('/nav_show_tovar', navController.navShowTovar);

export default router;
