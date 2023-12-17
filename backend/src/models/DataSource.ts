import "reflect-metadata";
import { DataSource } from "typeorm";
import { ParcelEntity } from "./parcel.entity";

//TODO Make values configurable
export const dataSource = new DataSource({
  type: "postgres",
  host: "db", // use localhosst if you run the app not in the docker
  port: 5432, // use 5433 if you run the app not in the docker
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
