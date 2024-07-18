import React, { useState, useEffect } from "react";
import { POST, GET,PUT, DELETE } from "../services/fetcher";
import {
  useNavigate,
  Link,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import { Book, Category } from "../types";

interface UpdateProps {}

const UpdateBook = (props: UpdateProps) => {    
  const { id } = useParams()
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectCatId, setSelectCatId] = useState(0);



 
  useEffect(() => {
    GET<Book>(`/api/books/${id}`).then((book) => {
        setTitle(book.title);
        setAuthor(book.author);
        setPrice(book.price);
        setSelectCatId(book.category_id)
    })
    
    console.log('This is the useEffect updateBook');

    console.log(id);

    GET('/api/categories').then((categories) => setCategories(categories));
  }, [])
  

  const handleButton = () => {
    const url = `/api/books/`;

    console.log(url + id)
    PUT(url + id, { author, title, price, category_id: selectCatId }).then((book) => {
      navigate(`/books/${id}`);
    });
  };

  const handleDelete = () => {
    DELETE('/api/books/' + id).then((data) => {
      alert(data.message)
    })
  }

  
  console.log({ title, author, price, selectCatId})


  return (
    <main className="container mt-5">
      <section className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card-body">
            <div>
              <h1 className="d-flex justify-content-center">
               Updating Book#{id}!
              </h1>

              <div className="d-flex justify-content-center m-2">
                <input
                  className="m-2"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                  className="m-2"
                  placeholder="Title"
                  nonce=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <input
                className="m-2"
                placeholder="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />

              <select
                value={selectCatId}
                onChange={(e) => setSelectCatId(Number(e.target.value))}
              >
                <option value={0}>Pick a Category</option>
                {categories.map((cat) => (
                  <option key={`categories-${cat.id}`} value={cat.id}>{cat.name}</option>
                ))}
              </select>

              <div className="d-flex justify-content-center m-2">
                <button
                  className="rounded mx-4"
                  onClick={handleButton}
                >
                  Click to Update your Book
                </button>
                </div>
                <div className="d-flex justify-content-center m-2">
                <button
                  className="rounded mx-4"
                  onClick={handleDelete}
                >
                  Click to Delete your Book
                </button>
                </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// This is where I would need to create a select element, and took extra pieces of state so that I can retrieve the categories, and then have them sent with the other information when I'm posting the book.

export default UpdateBook;
