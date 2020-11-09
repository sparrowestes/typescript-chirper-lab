import * as express from 'express';
//const chirpsRouter = require('./chirps')
import chirpsRouter from './routes/chirps'

const router = express.Router();

// router.get('/api/sup', (req, res, next) => {
//     res.json('y\'all');
// });

router.use('/chirps', chirpsRouter)

export default router;