const AppDataSource   = require("./data-source")
const { User }  = require("./entity/User")
const UserController = require('./controllers/UserController');
AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    //how can i get the createUser function from controller here?
    
    const userController = new UserController();
    const user = userController.createUser({name: "Timber", email: "Saw", password: "1234"});
    
    
    
    
    
    
    
    
    
    
    

    // await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
