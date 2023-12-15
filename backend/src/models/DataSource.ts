import "reflect-metadata";
import { DataSource } from "typeorm";
import { ParcelEntity } from "./parcel.entity";

export const dataSource = new DataSource({
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
});

dataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) =>
    console.error("Error during Data Source initialization", error)
  );
