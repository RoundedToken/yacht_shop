import { Router } from 'express';
import navController from '../controllers/navController.js';
import webController from '../controllers/webController.js';

const router = new Router();

router.get('/nav_goods_list', navController.navGoodsList);
router.get('/nav_show_tovar', navController.navShowTovar);
router.get('/nav_tree', navController.navTree);

router.get('/web_tovar_parameters', webController.webTovarParameters);
router.get('/web_cart_product_list', webController.webCartProductList);
router.post('/web_order', webController.webOrder);

export default router;
