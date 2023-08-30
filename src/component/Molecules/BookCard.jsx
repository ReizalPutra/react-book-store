import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import BookForCard from "../../assets/Books.png";
import { Books } from "../../context/BookContext";

export default function BookCard() {
  const { searchBook } = useContext(Books);

  return (
    <div className="d-flex justify-content-center py-5 gap-5 flex-wrap">
      {searchBook.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id} border="info" className="text-center text-light bg-info">
          <Card.Img variant="top" src={BookForCard} />
          <hr />
          <Card.Body>
            <Card.Title>{item.judul}</Card.Title>
            <Card.Text>{item.author}</Card.Text>
            <Button variant="light" className="text-dark">Detail</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
