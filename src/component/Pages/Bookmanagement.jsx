import React from "react";
import BookForm from "../Molecules/BookForm";
import BookList from "../Molecules/BookList";

function Bookmanagement() {
  return (
    <div>
      <h1 className="text-center mt-5">Manajemen Buku</h1>
      <div className="container mt-5">
        <BookForm />
      </div>
      <BookList />
    </div>
  );
}

export default Bookmanagement;
