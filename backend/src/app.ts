import express from "express";
import "reflect-metadata"
import { Parcel } from "./models/parcel";
import { AppDataSource } from "./models/data-source";

const app = express();
const port = process.env.PORT ?? 3000;

app.get("/", async (req, res) => {
  var parcel = new Parcel()
  parcel.description = "d"
  parcel.country = "Estonia"
  parcel.deliveryDate = new Date
  parcel.parcelSKU = "ABS-12352354-l"
  parcel.town = "Tallinn"
  parcel.streetAddress = "Vibu 1"

  await AppDataSource.manager.save(parcel)
  res.send(`Parcel has been saved. Parcel id is ${parcel.id}`)
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
