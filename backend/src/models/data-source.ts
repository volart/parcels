import "reflect-metadata"
import { DataSource } from "typeorm"
import { ParcelEntity } from "./parcel.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "parcels",
    password: "123",
    database: "parcelsdb",
    synchronize: true,
    logging: false,
    entities: [ParcelEntity],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => {

    })
    .catch((error) => console.log(error))
