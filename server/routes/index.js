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
router.get('/web_search', webController.webSearch);
router.get('/web_relatedProducts', webController.webRelatedProducts);
router.get('/web_crimping', webController.webCrimping);

//For dev only
async function dev() {
    try {
        const devController = (await import('../controllers/devController.js')).default;

        router.get('/get_last_sales', devController.getLastSales);
        router.get('/get_pics', devController.getPics);
    } catch (error) {}
}
await dev();

export default router;
