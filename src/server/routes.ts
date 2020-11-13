import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/chirps', async (req, res) => {
    try {
        res.json(await db.chirps.allChirps());
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/chirps/:id', async (req, res) => {
    try {
        res.json(await db.chirps.singleChirp(req.params.id)[0]);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;