import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contects/AuthProvider';
const baseURL = import.meta.env.VITE_API_BASE_URL;
const UploadBook = () => {
  const { user } = useContext(AuthContext);
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

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const book_title = form.book_title.value;
    const author_name = form.author_name.value;
    const image_url = form.image_url.value;
    const category = form.category.value;
    const book_description = form.book_description.value;
    const book_pdf_url = form.book_pdf_url.value;

    const bookObj = {
      book_title,
      author_name,
      image_url,
      category,
      book_description,
      book_pdf_url,
      uploadedBy: user.uid // Use the user's uid
    }

    fetch(`https://kitabganj-fresh-1.onrender.com/upload-book`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Uploaded Successfully!!!")
      form.reset();
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col gap-8">
        {/* First row */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="book_title" value="Book Title" />
            </div>
            <TextInput id="book_title" name='book_title' type="text" placeholder="Name Of The Book" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Cover Page URL" />
            </div>
            <TextInput id="image_url" name='image_url' type="text" placeholder="Cover Of The Book" required />
          </div>
        </div>

        {/* Second row */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="author_name" value="Author Name" />
            </div>
            <TextInput id="author_name" name='author_name' type="text" placeholder="Author Of The Book" required />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Book description */}
        <div>
            <div className="mb-2 block">
              <Label htmlFor="book_description" value="Book Description" />
            </div>
            <Textarea id="book_description" name="book_description" className='w-full' placeholder="Write Book's Description..." required rows={5} />
        </div>

        {/* Book PDF link */}
        <div>
            <div className="mb-2 block">
              <Label htmlFor="book_pdf_url" value="Book PDF URL" />
            </div>
            <TextInput name="book_pdf_url" id="book_pdf_url" className='w-full' placeholder="URL" />
        </div>

        <Button type="submit" className='mt-5'>Upload Book</Button>
      </form>
    </div>
  );
};

export default UploadBook;
