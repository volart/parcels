import express, { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import parcelRoutes from "./api/parcel.routes";
import parcelsRoutes from "./api/parcels.routes";
import cors from "cors";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

// CORS to allow requests from Angular frontend
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));

app.use("/api/parcel", parcelRoutes);
app.use("/api/parcels", parcelsRoutes);

// TODO: Write test for 404
// Catch-all route for undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Not Found" });
});


// TODO: Write test for 500
// Error-handling
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
