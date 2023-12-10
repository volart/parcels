import "reflect-metadata"
import { DataSource } from "typeorm"
import { Parcel } from "./models/parcel"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "parcels",
    password: "123",
    database: "parcelsdb",
    synchronize: true,
    logging: false,
    entities: [Parcel],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {

    })
    .catch((error) => console.log(error))
