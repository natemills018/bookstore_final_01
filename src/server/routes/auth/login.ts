import {Router} from 'express'

import jwt from 'jsonwebtoken';

import db from '../../db';
import config from '../../config';

const router = Router();

router.post('/', async (req, res) =>{
    try {
        const { email, password } = req.body;
        const [user] = await db.users.find('email', email);

        if(!user)
             return res.status(401).json({message:'Invalid Credentials'});
        
        const token = jwt.sign({id: user.id, email}, config.jwt.secret, {expiresIn: config.jwt.expiration})
        res.status(201).json({ message: 'You have logged in', token })
        
        //check for users email
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'this code sucks'})
    }

})

export default router;