import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";

const baseURL = import.meta.env.VITE_API_BASE_URL || "https://kitabganj-fresh-1.onrender.com";

function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Failed to fetch books:", err));
  }, []);

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card key={book._id}>
            <img
              src={book.image_url}
              alt={book.book_title}
              className="h-96 w-full object-cover"
            />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.book_title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.book_description}
            </p>
            <Link
              to={`/book/${book._id}`}
              className="bg-blue-700 font-semibold text-white py-2 px-8 rounded inline-block mt-2"
            >
              Buy Now
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Shop;
