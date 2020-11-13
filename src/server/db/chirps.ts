import { Query } from './index';

const allChirps = async () => 
Query('SELECT * FROM users JOIN chirps ON users.id = chirps.userid');

const singleChirp = async (id: string) => 
Query('SELECT * FROM chirps WHERE id = ?', [id]);


export default {
    allChirps,
    singleChirp,
}