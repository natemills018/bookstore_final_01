import {Router} from 'express'
import bookRouter from './books';
import categoryRouter from './categories';





const router = Router();

router.use('/books', bookRouter)
router.use('/categories', categoryRouter)



export default router;