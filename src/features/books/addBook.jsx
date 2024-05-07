import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./booksSclice";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: nanoid(), title, author }));
    navigate("/show-books", { replace: true });
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="title">Enter Title : </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-container">
          <label htmlFor="author">Enter Author Name : </label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
