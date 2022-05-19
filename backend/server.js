import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRouter.js";

dotenv.config();
const app = express();
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running...");
});
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;
const nodeEev = process.env.NODE_ENV;
app.listen(port, () => {
  console.log(`Server is running on port ${port} in ${nodeEev} mode`.yellow);
});
