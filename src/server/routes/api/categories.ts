import {Router} from 'express'
import db from '../../db';

const router = Router();

router.get('/' , async (req, res) => {
    try {
        const books = await db.categories.getAll()
        res.json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error, cant retrieve books', error})
    }

   
})


export default router;