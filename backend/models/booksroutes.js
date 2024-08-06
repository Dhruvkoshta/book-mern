import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();
//Route for save a new book
router.post("/", async (req, res) => {
	try {
		if (!req.body.title || !req.body.author || !req.body.publishYear) {
			return res.status(400).json({
				message: "Please provide all the required fields",
			});
		}
		const newBook = new Book({
			title: req.body.title,
			author: req.body.author,
			publishYear: req.body.publishYear,
		});
		const book = await Book.create(newBook);

		return res.status(201).send(book);
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
});
//Route for getting all books
router.get("/", async (req, res) => {
	try {
		const books = await Book.find({});

		return res.status(200).json({
			count: books.length,
			data: books,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
});

//Route for getting a single book
router.get("/:id", async (req, res) => {
	try {
		const book = await Book.findById(req.params.id);

		return res.status(200).json({
			data: book,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
});
//Route for updating a book
router.put("/:id", async (req, res) => {
	try {
		if (!req.body.title || !req.body.author || !req.body.publishYear) {
			return res.status(400).json({
				message: "Please provide all the required fields",
			});
		}
		const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!book) {
			return res.status(404).json({
				message: "Book not found",
			});
		} else {
			return res.status(200).json({
				data: book,
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
});
//Route for deleting a book
router.delete("/:id", async (req, res) => {
	try {
		const book = await Book.findByIdAndDelete(req.params.id);

		return res.status(200).json({
			data: book,
		});
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
});

export default router;
