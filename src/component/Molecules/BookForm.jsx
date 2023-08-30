import React, { useContext } from "react";
import {
  Button,
  Col,
  Collapse,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { Books } from "../../context/BookContext";

function BookForm() {
  const {
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
  } = useContext(Books);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!judul || !author) return;
    if (editItemId !== null) {
      updateBook(editItemId, { judul, author });
      setEditItemId(null);
    } else {
      const newBook = {
        judul,
        author,
        id: Date.now(),
      };
      addBook(newBook);
    }
    setJudul("");
    setAuthor("");
    setFormMode(false);
  };

  return (
    <>
      <Button
        variant="info"
        onClick={() => {
          if (formMode) {
            setEditItemId(null);
            setJudul("");
            setAuthor("");
          }
          setFormMode(!formMode);
        }}
      >
        tambah buku
      </Button>

      <Collapse in={formMode}>
        <div id="form" className="py-2 my-3 px-3 bg-info rounded">
          <form className="mt-2" onSubmit={handleOnSubmit}>
            <Row>
              <Col>
                <FloatingLabel controlId="floatingInput" label="judul">
                  <Form.Control
                    type="text"
                    placeholder="judul"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="floatingIput" label="Penulis">
                  <Form.Control
                    type="text"
                    placeholder="Penulis.."
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </FloatingLabel>
              </Col>
              <Col xs="auto">
                <Button
                  variant="outline-light"
                  type="submit"
                  size="lg"
                  className="mt-2"
                >
                  {editItemId !== null ? "Update" : "Submit"}
                </Button>
              </Col>
            </Row>
          </form>{" "}
        </div>
      </Collapse>
    </>
  );
}

export default BookForm;
