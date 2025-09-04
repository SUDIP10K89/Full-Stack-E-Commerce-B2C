import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/monogdb.js";
import { connectCloudinary } from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";


//App Config
const app = express();
const PORT = 3000||process.env.PORT;

connectDB();
connectCloudinary();

//Middleware
app.use(express.json());
app.use(cors());

//api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the e-commerce API!");
});

setInterval(() => {
  fetch("https://full-stack-e-commerce-b2c.onrender.com")
    .then((res) => console.log("Pinged self:", res.status))
    .catch((err) => console.error("Ping failed", err));
}, 1000*60*5); // 1hr in milisec


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
