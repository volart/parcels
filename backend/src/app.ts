import express from "express";
import "reflect-metadata"
import parcelRoutes from './api/parcels.routes'

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use('/api/parcel', parcelRoutes);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


export default app;
