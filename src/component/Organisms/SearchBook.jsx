import React, { useContext } from "react";
import { Button, Col, FloatingLabel, FormControl, Row } from "react-bootstrap";
import { Books } from "../../context/BookContext";

function SearchBook() {
  const { search, setSearch, onSearchChange } = useContext(Books);

  const handleSearch = () => {
    onSearchChange(search);
  };

  return (
    <div
      style={{ width: "50%" }}
      className="bg-info py-2 px-2 justify-content-center rounded w-50 mx-auto"
    >
      <Row>
        <Col>
          <FloatingLabel label="Search">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            
              onChange={(e) => setSearch(e.target.value)}
            />
          </FloatingLabel>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-light"
            type="button"
            className="mt-2"
            onClick={handleSearch}
          >
            Cari
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SearchBook;
