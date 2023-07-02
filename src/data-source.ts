const reflectMetadata = require("reflect-metadata")
const  DataSource = require("typeorm")
const { User } = require("./entity/User")

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "132465",
    database: "helius",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
module.exports = AppDataSource