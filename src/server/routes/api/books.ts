import {Router} from 'express'
import db from '../../db';

const router = Router();


router.get('/' , async (req, res) => {
    try {
        const books = await db.books.getAll()
        res.json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error, cant retrieve books', error})
    }

   
})

router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [book] = await db.books.getOne(id)

        //checks to see if there is a book at the requested id

        if(!book) {
            return res.status(404).json({message: 'No Book found at this id'})
        }
        
        res.json(book)

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error, cant retrieve your requested book', error})
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const deletedBook = req.body;
        console.log({ id, bookData: deletedBook})
        await db.books.deleteBook(id)
        res.json({message: `The book at id number ${id} has been removed`})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error, cant delete your book', error})
    }
})

export default router;