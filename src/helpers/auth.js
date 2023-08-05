import { User } from "../user/user.model.js";

export async function userExists(email){
    try {
        const isUserExists = await User.findAll({
        attributes : ['email'],      
        where : {email :email}        
    });
    return (isUserExists.length >= 1) ? true : false; 
    } catch (error) {
        console.log(error)
        return false
    }
}

export async function loginIsCorrect(email, password){
    try {
        const isUserExists = await User.findAll({
        attributes : ['email'],      
        where : {email :email, password:password}        
    });
    return (isUserExists.length >= 1) ? true : false; 
    } catch (error) {
        console.log(error)
        return false
    }
}