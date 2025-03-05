import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // State for modal
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const itemsPerPage = 5; // 5 books per page

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/book/list`);
      if (response.data.success) {
        setList(response.data.books);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const removeBook = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/book/remove`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
        // Adjust current page if necessary after deletion
        const totalPages = Math.ceil(list.length / itemsPerPage);
        if (currentPage > totalPages) setCurrentPage(totalPages || 1);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Error removing book:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data?.message || "Failed to remove book");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const openModal = (book) => setSelectedBook(book);
  const closeModal = () => setSelectedBook(null);

  // Pagination logic
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = list.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <p className="mb-2 text-lg font-semibold">All Books List</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title - Hidden on mobile, full grid on desktop */}
        <div className="hidden md:grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_0.5fr] items-center py-2 px-4 border bg-gray-100 text-sm font-medium">
          <b>Image</b>
          <b>Name</b>
          <b>Author</b>
          <b>Genre</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {/* Book List */}
        {paginatedList.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_0.5fr] items-center py-2 px-4 border border-gray-200 text-sm hover:bg-gray-50 md:gap-2"
          >
            {/* Mobile View: Stacked layout */}
            <div className="md:hidden flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-16 h-20 object-cover"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">{item.author}</p>
                  <p className="text-gray-500">{item.genre}</p>
                  <p className="font-medium">{item.price.toFixed(2)} €</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  className="text-red-500 hover:text-red-700 text-left"
                  onClick={() => removeBook(item._id)}
                >
                  Remove
                </button>
                <button
                  className="text-blue-500 hover:text-blue-700 text-left"
                  onClick={() => openModal(item)}
                >
                  Details
                </button>
              </div>
            </div>
            {/* Desktop View: Grid layout */}
            <img
              src={item.image[0]}
              alt={item.name}
              className="hidden md:block w-12 h-16 object-cover"
            />
            <p className="hidden md:block">{item.name}</p>
            <p className="hidden md:block">{item.author}</p>
            <p className="hidden md:block">{item.genre}</p>
            <p className="hidden md:block">{item.price.toFixed(2)} €</p>
            <div className="hidden md:flex md:gap-2">
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeBook(item._id)}
              >
                Remove
              </button>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => openModal(item)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center items-center gap-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for Technical Specifications */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">{selectedBook.name}</h2>
            <div className="space-y-2">
              <p>
                <b>Author:</b> {selectedBook.author}
              </p>
              <p>
                <b>Description:</b> {selectedBook.description}
              </p>
              <p>
                <b>Genre:</b> {selectedBook.genre}
              </p>
              <p>
                <b>Categories:</b> {selectedBook.categories.join(", ") || "N/A"}
              </p>
              <p>
                <b>Price:</b> {selectedBook.price.toFixed(2)} €
              </p>
              <p>
                <b>Discount:</b> {selectedBook.discount}%
              </p>
              <p>
                <b>Publication Date:</b>{" "}
                {new Date(selectedBook.publicationDate).toLocaleDateString()}
              </p>
              <p>
                <b>Pages:</b> {selectedBook.pages || "N/A"}
              </p>
              <p>
                <b>Language:</b> {selectedBook.language}
              </p>
              <p>
                <b>Publisher:</b> {selectedBook.publisher || "N/A"}
              </p>
              <p>
                <b>Dimensions:</b>
                {selectedBook.dimensions
                  ? `${selectedBook.dimensions.width || 0} x ${
                      selectedBook.dimensions.height || 0
                    } x ${selectedBook.dimensions.depth || 0} cm`
                  : "N/A"}
              </p>
              <p>
                <b>Weight:</b>{" "}
                {selectedBook.weight ? `${selectedBook.weight} g` : "N/A"}
              </p>
              <p>
                <b>Bestseller:</b> {selectedBook.bestseller ? "Yes" : "No"}
              </p>
              <p>
                <b>Images:</b>
              </p>
              <div className="flex gap-2">
                {selectedBook.image.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Image ${idx + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                ))}
              </div>
            </div>
            <button
              className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
