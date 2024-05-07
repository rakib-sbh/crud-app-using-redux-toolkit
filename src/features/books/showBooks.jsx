import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./booksSclice";
import { Link } from "react-router-dom";

const ShowBooks = () => {
  const books = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const numberOfBooks = books.length;

  return (
    <div>
      {numberOfBooks > 0 ? (
        <h3>All Books</h3>
      ) : (
        <>
          <h3>Currently you do not have any books</h3>
          <Link to={"/add-book"}>
            <button className="add">Add Book</button>
          </Link>
        </>
      )}
      {numberOfBooks > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <Link to={"/edit-book"} state={{ id, title, author }}>
                      <button className="edit">Edit</button>
                    </Link>
                    <button
                      className="delete"
                      onClick={() => handleDeleteBook(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowBooks;
