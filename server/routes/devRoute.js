import router from '.';
import devController from '../controllers/devController.js';

router.get('/get_last_sales', devController.getLastSales);
