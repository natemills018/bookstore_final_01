import {Router} from 'express'
import loginRouter from './login';
import registerRouter from './register';
import tokenCheck from '../../middlewares/tokenCheck';

const router = Router();


router.get('/verify', tokenCheck, (req, res) => {
    res.json({message: 'Nice!'})
})
router.use('/login', loginRouter)
router.use('/register', registerRouter);

export default router;