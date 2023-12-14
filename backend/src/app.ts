import express, { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import parcelRoutes from "./api/parcel.routes";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/api/parcel", parcelRoutes);

// Catch-all route for undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Not Found" });
});

// Error-handling
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
