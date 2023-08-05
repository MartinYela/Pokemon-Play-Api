import jwt from 'jsonwebtoken';
import { secret } from './auth.secret.js';
import { User } from '../user/user.model.js';

export const validateJWTAuth = (req, res, next) => {
    
    const headerAuth = req.get('Authorization'); 
    const jwtToken = headerAuth?.split(' ')[1]; 
    try{
        const jwtDecoded = jwt.verify(jwtToken, secret);
        req.email = jwtDecoded.user;
        next();
    }catch(err){
        console.log(err);
        res.status(401).send('Usuario sin token válido');
    }  
}