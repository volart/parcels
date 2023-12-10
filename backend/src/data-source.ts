import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "parcels",
    password: "123",
    database: "parcelsdb",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})
