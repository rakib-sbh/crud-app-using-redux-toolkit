import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialBooksStore = {
  books: [
    {
      id: nanoid(),
      title: "Love Bangladesh",
      author: "Rakib Talukder Rupom",
    },
    {
      id: nanoid(),
      title: "Hate Bangladesh",
      author: "Marajul Islam Shawn",
    },
    {
      id: nanoid(),
      title: "I am confused",
      author: "Mahbub Talukder",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooksStore,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      state.books = state.books.map((book) => {
        if (book.id === id) {
          book.author = author;
          book.title = title;
        }

        return book;
      });
    },
  },
});

export const { showBooks, addBook, deleteBook, editBook } = booksSlice.actions;

export default booksSlice.reducer;
