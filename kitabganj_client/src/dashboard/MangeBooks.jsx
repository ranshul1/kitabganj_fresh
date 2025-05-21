import { Table } from "flowbite-react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/all-books?uploadedBy=${user.uid}`)
        .then(res => res.json())
        .then(data => setAllBooks(data));
    }
  }, [user]);

  //delete a book
  const handleDelete = (id) =>{
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is deleted successfully.");
      setAllBooks(allBooks.filter(book => book._id !== id));
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Edit or Manage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allBooks.map((book, index) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{book.book_title}</Table.Cell>
              <Table.Cell>{book.author_name}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>200.0 INR</Table.Cell>
              <Table.Cell>
                <Link className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                to={`/admin/dashboard/edit-books/${book._id}`}>
                  Edit
                </Link>
                <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">Delete</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBooks;
