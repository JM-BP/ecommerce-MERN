import { response } from "express";
import { v2 as cloudinary } from "cloudinary";
import bookModel from "../models/bookModel.js";

// Function for adding a book
const addBook = async (req, res) => {
  try {
    const {
      name,
      author,
      description,
      genre,
      categories,
      price,
      discount,
      publicationDate,
      pages,
      language,
      publisher,
      dimensions,
      weight,
      tags,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];

    const images = [image1, image2].filter((item) => item != undefined);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    // Validating required fields
    if (
      !name ||
      !author ||
      !description ||
      !genre ||
      !price ||
      !images ||
      !publicationDate
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Check if genre is valid
    const validGenres = [
      "Adventure Fiction",
      "Autobiography and Memoir",
      "Children's Literature",
      "Classic",
      "Comedy",
      "Crime",
      "Dystopian",
      "Erotic Thriller",
      "Fairy Tale",
      "Fantasy",
      "Fiction",
      "Gothic Fiction",
      "Graphic Novel",
      "Historical",
      "Historical Fiction",
      "Horror",
      "Literary Fiction",
      "Magical Realism",
      "Mystery",
      "Romance Novel",
      "Romantic Suspense",
      "Science Fiction",
      "Thriller",
      "Young Adult",
    ];

    if (!validGenres.includes(genre)) {
      return res.status(400).json({ success: false, message: "Invalid genre" });
    }

    // Creating a new book instance
    const newBook = new bookModel({
      name,
      author,
      description,
      genre,
      categories,
      price: Numbrer(price),
      discount,
      image: imagesUrl,
      publicationDate,
      pages,
      language,
      publisher,
      dimensions: JSON.parse(sizes),
      weight,
      tags,
      bestseller: bestseller === "true" ? true : false,
    });

    // Saving the book to the database
    const book = new bookModel(newBook);
    await book.save;
    res.status(201).json({ success: true, book: book, message: "Book added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

//Function for list books
const listBooks = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.json({ success: true, books });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Function for remove book
const removeBook = async (req, res) => {
  try {
    await bookModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Book removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//Function for single book info
const singleBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await bookModel.findById(bookId);
    res.json({ success: true, book });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listBooks, addBook, removeBook, singleBook };
