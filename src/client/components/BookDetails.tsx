import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import type {Book} from '../types';
import { GET } from "../services/fetcher";

interface BookDetails {

}

const BookDetails = (props: BookDetails) => {
    const { id } = useParams();
    const [data, setData] = useState<Book | null>(null);

    useEffect(() => {
        GET(`/api/books/${id}`)
        .then(data => setData(data))
    }, [id])

    return (
        <main className='container mt-5'>
            <section className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                        <div className='card-body'>
                            <h2 className='card-title d-flex justify-content-center align-items-center'> Book Details for {data?.author}</h2>
                            <p className='card-title  d-flex justify-content-center text-dark align-items-center'><span className='text-decoration-underline'>{data?.title}</span> </p>
                            <div className="d-flex justify-content-center align-items-center">
                            <Link to='/books/:id/update' className='btn btn-outline btn-success'>Edit Book</Link>
                            <Link to='/books' className='btn btn-outline btn-primary mx-4'>Go Back to Books</Link>
                            <Link to='/books/new' className='btn btn-outline btn-light'>Add Your Own!</Link>
                            </div>
                            
                        </div>
                    </div>
            </section>
        </main>
    )

}

export default BookDetails;