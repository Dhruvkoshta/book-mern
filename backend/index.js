import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoutes from "./models/booksroutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT;

//Middleware for parsing request body
app.use(express.json());
//Midlle ware for handling cors
// app.use(cors());
//allow custom headers
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["content-type"],
		credentials: true,
	})
);

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/books", booksRoutes);

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("Connected to MongoDB");
		app.listen(port, () => {
			console.log("Running on port", port);
		});
	})
	.catch((err) => {
		console.log("Error connecting to MongoDB", err);
	});
