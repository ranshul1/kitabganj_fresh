import React, { useState } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const bookData = useLoaderData();

  const {
    book_title = '',
    author_name = '',
    image_url = '',
    category = '',
    book_description = '',
    book_pdf_url = ''
  } = bookData || {};

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Thriller",
    "Self-Help",
    "Poetry",
    "Educational",
    "Religion",
    "History",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category || bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  //handle book update submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedBook = {
      book_title: form.book_title.value,
      author_name: form.author_name.value,
      image_url: form.image_url.value,
      category: form.category.value,
      book_description: form.book_description.value,
      book_pdf_url: form.book_pdf_url.value,
    };

    fetch(`https://kitabganj-fresh-1.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update book");
        return res.json();
      })
      .then(() => {
        alert("Book is updated Successfully!!!");
      })
      .catch((err) => alert("Error updating book: " + err.message));
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col gap-8">
        {/* First row */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="book_title" value="Book Title" />
            </div>
            <TextInput
              id="book_title"
              name="book_title"
              type="text"
              placeholder="Name Of The Book"
              required
              defaultValue={book_title}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Cover Page URL" />
            </div>
            <TextInput
              id="image_url"
              name="image_url"
              type="text"
              placeholder="Cover Of The Book"
              required
              defaultValue={image_url}
            />
          </div>
        </div>

        {/* Second row */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author_name" value="Author Name" />
            </div>
            <TextInput
              id="author_name"
              name="author_name"
              type="text"
              placeholder="Author Of The Book"
              required
              defaultValue={author_name}
            />
          </div>

          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="book_description" value="Book Description" />
          </div>
          <Textarea
            id="book_description"
            className="w-full"
            placeholder="Write Book's Description..."
            required
            defaultValue={book_description}
          />
        </div>

        {/* Book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="book_pdf_url" value="Book PDF URL" />
          </div>
          <TextInput
            name="book_pdf_url"
            id="book_pdf_url"
            className="w-full"
            placeholder="URL"
            defaultValue={book_pdf_url}
          />
        </div>

        <Button type="submit" className="mt-5">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
