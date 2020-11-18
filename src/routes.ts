import { Router } from 'express';
import CityController from './controllers/CityController';
import ContactController from './controllers/ContactController';

const router = Router();

const contactController = new ContactController();
const cityController = new CityController();

router.get('/', (req, res) => res.json({ message: 'Server Running 🔥' }));

router.get('/contacts', contactController.index);

router.get('/contacts/search', contactController.search);

router.post('/contacts', contactController.store);

router.put('/contacts/:id', contactController.update);

router.delete('/contacts/:id', contactController.delete);

router.get('/contacts/:id', contactController.show);

router.get('/ufs', cityController.index);
router.get('/ufs/:id', cityController.show);

export default router;
