import {Router} from 'express'
import db from '../../db';
import tokenCheck from '../../middlewares/tokenCheck';

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
        console.log({ beforeParse: req.params.id });
        const id = parseInt(req.params.id, 10)
        console.log({ afterParse: id });

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

router.delete('/:id', tokenCheck, async(req, res) => {
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



router.post('/', tokenCheck, async (req, res) => {
    try {
        const { title, price, author, category_id} = req.body

        //checker to see if we have all of the necessary data

        if(!title || !price || !author || !category_id) {
            return res.status(400).json({ message: 'Missing one or more of'})
        }
        const results = await db.books.insert({ title, price, author, category_id});
        res.status(201).json({ message: 'Yes! We added your book!', id: results.insertId})
    } catch (error) {
        res.status(500).json({ message: 'Could not create the book - internal server error'})
        console.log(error)
    }
})


router.put('/:id', tokenCheck, async(req, res) => {

    try {
        const id = parseInt(req.params.id, 10)
        const updatedBook = req.body;
        // console.log({ id, bookData: updatedBook});
        await db.books.updatedBook(updatedBook, id);
        res.json({ message: `The book at ${id} has been updated`})

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})











export default router;