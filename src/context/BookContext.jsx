import React, { createContext, useState } from "react";

const inisialBooks = [
  {
    id: 1,
    judul: "Laskar pelangi",
    author: "Andrea hirata",
  },
  {
    id: 2,
    judul: "Bumi",
    author: "Tere Liye",
  },
  {
    id: 3,
    judul: "Koala Kumal",
    author: "Raditya dika",
  },
];
const BookContext = createContext();

// eslint-disable-next-line react/prop-types
export default function BookContextProvider({ children }) {
  const [books, setBooks] = useState(inisialBooks);
  const [formMode, setFormMode] = React.useState(false);
  const [judul, setJudul] = useState("");
  const [author, setAuthor] = useState("");
  const [editItemId, setEditItemId] = useState(null);
  const [search, setSearch] = useState("");
  const [ searchBook, setSearchBook] = useState(books);
  const addBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  const updateBook = (id, updatedData) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedData } : book
      )
    );
  };

  const deleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  const onSearchChange = (value) => {
    const filteredBooks = books.filter((book) =>
      book.judul.toLowerCase().includes(value.toLowerCase())
    );
    setSearchBook(filteredBooks);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        updateBook,
        judul,
        setJudul,
        author,
        setAuthor,
        formMode,
        setFormMode,
        editItemId,
        setEditItemId,
        deleteBook,
        search,
        setSearch,
        searchBook,
        setSearchBook,
        onSearchChange
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export const Books = BookContext;
