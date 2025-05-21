import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const {book_title, author_name, image_url, category, book_description, book_pdf_url} = useLoaderData();

  
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

  //handle book submission
 const handleUpdate = (event) => {
  event.preventDefault();
  const form = event.target;

  const book_title = form.book_title.value;
  const author_name = form.author_name.value;
  const image_url = form.image_url.value;
  const category = form.category.value;
  const book_description = form.book_description.value;
  const book_pdf_url = form.book_pdf_url.value;

  const bookObj = {
    book_title, author_name, image_url, category, book_description, book_pdf_url
  }

  //update data to db
  fetch(`http://localhost:5000/book/${id}`, {
    method: "PATCH" ,
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(bookObj)
  }).then(res => res.json()).then(data => {
    alert("Book is updated Succesfully!!!")
  })
  
}
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col gap-8">
        {/* First row */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="book_title" value="Book Title" />
            </div>
            <TextInput id="book_title" name='book_title' type="text" placeholder="Name Of The Book" required defaultValue={book_title}/>
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="image_url" value="Cover Page URL" />
            </div>
            <TextInput id="image_url" name='image_url' type="text" placeholder="Cover Of The Book" required defaultValue={image_url} />
          </div>
        </div>

        {/* Second row */}
        <div className='flex flex-col lg:flex-row gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="author_name" value="Author Name" />
            </div>
            <TextInput id="author_name" name='author_name' type="text" placeholder="Author Of The Book" required defaultValue={author_name} />
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

        {/*book description*/}
        <div>
            <div className="mb-2 block">
              <Label htmlFor="book_description" value="Book Description" />
            </div>
            <Textarea id="book_description" className='w-full' placeholder="Write Book's Description..." required rows={5} defaultValue={book_description}/>
        </div>

        {/* book pdf link */}
        <div>
            <div className="mb-2 block">
              <Label htmlFor="book_pdf_url" value="Book PDF URL" />
            </div>
            <TextInput name="book_pdf_url" id="book_pdf_url" className='w-full' placeholder="URL" defaultValue={book_pdf_url} />
        </div>

        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  );
}

export default EditBooks