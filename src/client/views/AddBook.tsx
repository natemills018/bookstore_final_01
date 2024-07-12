import React, { useState, useEffect } from "react";
import { POST, GET } from "../services/fetcher";
import {
  useNavigate,
  Link,
  useParams,
  useResolvedPath,
} from "react-router-dom";
import { Category } from "../types";

interface AddProps {}

const AddBook = (props: AddProps) => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectCatId, setSelectCatId] = useState("");

  useEffect(() => {
    GET("/api/categories").then((categories) => setCategories(categories));
  }, []);

  const handleButton = () => {
    const url = `/api/books/`;
    if (!selectCatId) {
      return alert("Select a book category to continue");
    }
    POST(url, { author, title, price, selectCatId }).then((book) => {
      console.log(book);
      alert('You added a book to the bookstore!')
      navigate(`/books/${book.id}`);
    });
  };
  return (
    <main className="container mt-5">
      <section className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card-body">
            <div>
              <h1 className="d-flex justify-content-center">
                Add your own book!
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <select
                value={selectCatId}
                onChange={(e) => setSelectCatId(e.target.value)}
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
                  Click to Add your Book
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

export default AddBook;
