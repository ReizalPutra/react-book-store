import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { Books } from "../../context/BookContext";

export default function BookList() {
  const {books,  setJudul, setAuthor, setFormMode, setEditItemId, deleteBook} = useContext(Books);
  
  function handleEdit(id) {
    const itemToEdit = books.find(item => item.id === id);
    setFormMode(true);
    setEditItemId(itemToEdit.id);
    setJudul(itemToEdit.judul);
    setAuthor(itemToEdit.author);
  }
  



  return (
    <div>
      {" "}
      <h4 className="text-center">Tabel Data buku</h4>
      <Table
        striped
        bordered
        hover
        className="mt-3 text-center container"
        variant="info"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Author</th>
            <th className="col-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) => (
            <tr key={item.id}>
              <>
                <>
                  <td>{index + 1}</td>
                  <td>{item.judul}</td>
                  <td>{item.author}</td>
                </>
                <td>
                  <button className="btn btn-sm btn-warning mx-2 my-1 " onClick={() => handleEdit(item.id)}>Edit</button>
                  <button className="btn btn-sm btn-danger my-1" onClick={() => deleteBook(item.id)}>Delete</button>
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
