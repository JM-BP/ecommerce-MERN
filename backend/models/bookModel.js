import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  genre: {
    type: String,
    enum: [
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
    ],
    required: true,
  },
  categories: { type: [String], default: [] },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  image: { type: [String], required: true },
  publicationDate: { type: Date, required: true },
  pages: { type: Number },
  language: { type: String, default: "English" },
  publisher: { type: String },
  dimensions: {
    width: { type: Number },
    height: { type: Number },
    depth: { type: Number },
  },
  weight: { type: Number },
  bestseller: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const bookModel = mongoose.models.book || mongoose.model("book", bookSchema);

export default bookModel;
