const User = require('../models/user');
import { AppDataSource } from "../data-source";

export class UserController {

    createUser = async (data) => {
        const user = new User({data});
        
        if(user) {
            const save = AppDataSource.manager.save(user);
            
            if(save)
            {
                console.log(save);
                
            }
        }
    };
}