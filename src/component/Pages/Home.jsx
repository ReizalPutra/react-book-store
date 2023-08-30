import React from "react";
import BookCard from "../Molecules/BookCard";
import SearchBook from "../Organisms/SearchBook";

function Home() {
  return (
    <div className="container py-5 width-50%">
    <SearchBook />
    <hr />
      <BookCard />
    </div>
  );
}

export default Home;
