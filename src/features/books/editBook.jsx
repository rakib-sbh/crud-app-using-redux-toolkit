import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./booksSclice";

const EditBook = () => {
  let { state } = useLocation();
  const { id, title, author } = state;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState(title);
  const [authorName, setAuthorName] = useState(author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, title: titleValue, author: authorName }));
    navigate("/show-books");
  };

  return (
    <div>
      <h3>Edit Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="title">Edit Title : </label>
          <input
            type="text"
            name="title"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        </div>
        <div className="form-container">
          <label htmlFor="author">Edit Author Name : </label>
          <input
            type="text"
            name="author"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <button type="submit">Edit Book</button>
      </form>
    </div>
  );
};

export default EditBook;
