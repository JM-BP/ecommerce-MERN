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

    const image1 = req.files?.image1 ? req.files.image1[0] : null;
    const image2 = req.files?.image2 ? req.files.image2[0] : null;
    const images = [image1, image2].filter((item) => item !== null);

    let imagesUrl = [];
    if (images.length > 0) {
      imagesUrl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {
            resource_type: "image",
          });
          return result.secure_url;
        })
      );
    }

    // Validating required fields
    if (
      !name ||
      !author ||
      !description ||
      !genre ||
      !price ||
      images.length === 0 ||
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
      categories: categories ? JSON.parse(categories) : [], // Parse if exists, else empty array
      price: Number(price), // Fixed typo: Numbrer -> Number
      discount: Number(discount || 0), // Convert to number, default to 0
      image: imagesUrl,
      publicationDate,
      pages: pages ? Number(pages) : undefined, // Convert to number if exists
      language,
      publisher,
      dimensions: dimensions ? JSON.parse(dimensions) : undefined, // Fixed: sizes -> dimensions
      weight: weight ? Number(weight) : undefined, // Convert to number if exists
      tags: tags ? JSON.parse(tags) : undefined, // Assuming tags is sent as JSON string
      bestseller: bestseller === "true" || bestseller === true, // Handle both string and boolean
    });

    // Saving the book to the database
    await newBook.save(); // Fixed: added parentheses and removed redundant new bookModel
    res
      .status(201)
      .json({ success: true, book: newBook, message: "Book added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Function for list books
const listBooks = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.json({ success: true, books });
  } catch (error) {
    console.error(error); // Changed to console.error for better error logging
    res.json({ success: false, message: error.message });
  }
};

// Function for remove book
const removeBook = async (req, res) => {
  try {
    await bookModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Book removed" });
  } catch (error) {
    console.error(error); // Changed to console.error
    res.json({ success: false, message: error.message });
  }
};

// Function for single book info
const singleBook = async (req, res) => {
  try {
    const { bookId } = req.body;
    const book = await bookModel.findById(bookId);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }
    res.json({ success: true, book });
  } catch (error) {
    console.error(error); // Changed to console.error
    res.json({ success: false, message: error.message });
  }
};

export { listBooks, addBook, removeBook, singleBook };
