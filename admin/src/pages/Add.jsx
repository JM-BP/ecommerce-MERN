import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [categories, setCategories] = useState("");
  const [price, setPrice] = useState("");
  const [image1, setImage1] = useState(null); // Changed to null instead of false
  const [image2, setImage2] = useState(null); // Changed to null instead of false
  const [discount, setDiscount] = useState("0");
  const [publicationDate, setPublicationDate] = useState("");
  const [pages, setPages] = useState("");
  const [language, setLanguage] = useState("English");
  const [publisher, setPublisher] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  const [weight, setWeight] = useState("");
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("author", author);
      formData.append("description", description);
      formData.append("genre", genre);
      const categoriesArray = categories.split(",").map((cat) => cat.trim());
      formData.append("categories", JSON.stringify(categoriesArray)); // Send as JSON string
      formData.append("price", price);

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);

      formData.append("discount", discount);
      formData.append("publicationDate", publicationDate);
      formData.append("pages", pages);
      formData.append("language", language);
      formData.append("publisher", publisher);
      const dimensions = {
        width: width || 0,
        height: height || 0,
        depth: depth || 0,
      };
      formData.append("dimensions", JSON.stringify(dimensions));
      formData.append("weight", weight);
      formData.append("bestseller", bestseller);

      const response = await axios.post(
        `${backendUrl}/api/book/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setAuthor("");
        setDescription("");
        setGenre("");
        setCategories("");
        setPrice("");
        setImage1(null);
        setImage2(null);
        setDiscount("0");
        setPublicationDate("");
        setPages("");
        setLanguage("English");
        setPublisher("");
        setWidth("");
        setHeight("");
        setDepth("");
        setWeight("");
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      );
      toast.error(
        error.response?.data?.message ||
          "An error occurred while adding the book"
      );
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-3">
          <div className="w-full">
            <p>Book Name</p>
            <input
              className="w-full px-3 py-2 border"
              type="text"
              placeholder="Enter book name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Author</p>
            <input
              className="w-full px-3 py-2 border"
              type="text"
              placeholder="Enter author name"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Description</p>
            <textarea
              className="w-full px-3 py-2 border"
              placeholder="Enter book description"
              rows="4"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Genre</p>
            <select
              className="w-full px-3 py-2 border"
              required
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">Select a genre</option>
              <option value="Adventure Fiction">Adventure Fiction</option>
              <option value="Autobiography and Memoir">
                Autobiography and Memoir
              </option>
              <option value="Children's Literature">
                Children's Literature
              </option>
              <option value="Classic">Classic</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Dystopian">Dystopian</option>
              <option value="Erotic Thriller">Erotic Thriller</option>
              <option value="Fairy Tale">Fairy Tale</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Fiction">Fiction</option>
              <option value="Gothic Fiction">Gothic Fiction</option>
              <option value="Graphic Novel">Graphic Novel</option>
              <option value="Historical">Historical</option>
              <option value="Historical Fiction">Historical Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Literary Fiction">Literary Fiction</option>
              <option value="Magical Realism">Magical Realism</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance Novel">Romance Novel</option>
              <option value="Romantic Suspense">Romantic Suspense</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Thriller">Thriller</option>
              <option value="Young Adult">Young Adult</option>
            </select>
          </div>

          <div className="w-full">
            <p>Categories (comma-separated)</p>
            <input
              className="w-full px-3 py-2 border"
              type="text"
              placeholder="e.g., fiction, bestseller, new"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
            />
          </div>
          <div>
            <p className="mb-2">Upload Images (Required)</p>
            <div className="flex gap-2">
              <label htmlFor="image1">
                <img
                  className="w-40"
                  src={!image1 ? assets.upload : URL.createObjectURL(image1)}
                  alt="Upload icon"
                />
                <input
                  type="file"
                  id="image1"
                  hidden
                  accept="image/*"
                  required
                  onChange={(e) => setImage1(e.target.files[0])}
                />
              </label>
              <label htmlFor="image2">
                <img
                  className="w-40"
                  src={!image2 ? assets.upload : URL.createObjectURL(image2)}
                  alt="Upload icon"
                />
                <input
                  type="file"
                  id="image2"
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage2(e.target.files[0])}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-3">
          <div className="w-full">
            <p>Price</p>
            <input
              className="w-full px-3 py-2 border"
              type="number"
              placeholder="Enter price"
              min="0"
              step="0.01"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Discount (%)</p>
            <input
              className="w-full px-3 py-2 border"
              type="number"
              placeholder="Enter discount percentage"
              min="0"
              max="100"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Publication Date</p>
            <input
              className="w-full px-3 py-2 border"
              type="date"
              required
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Pages</p>
            <input
              className="w-full px-3 py-2 border"
              type="number"
              placeholder="Number of pages"
              min="1"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Language</p>
            <input
              className="w-full px-3 py-2 border"
              type="text"
              placeholder="Enter language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Publisher</p>
            <input
              className="w-full px-3 py-2 border"
              type="text"
              placeholder="Enter publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </div>

          <div className="w-full">
            <p>Dimensions (cm)</p>
            <div className="flex gap-2">
              <input
                className="w-full px-3 py-2 border"
                type="number"
                placeholder="Width"
                min="0"
                step="0.1"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border"
                type="number"
                placeholder="Height"
                min="0"
                step="0.1"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <input
                className="w-full px-3 py-2 border"
                type="number"
                placeholder="Depth"
                min="0"
                step="0.1"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full">
            <p>Weight (grams)</p>
            <input
              className="w-full px-3 py-2 border"
              type="number"
              placeholder="Enter weight"
              min="0"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={bestseller}
                onChange={(e) => setBestseller(e.target.checked)}
              />
              <span>Add to Bestseller</span>
            </label>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" className="text-white px-6 py-2 rounded bg-black">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default Add;
