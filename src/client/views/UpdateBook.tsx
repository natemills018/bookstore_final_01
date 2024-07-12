import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import type { Book } from '../types';
import { GET, PUT } from '../services/fetcher';


interface UpdateBookProps {


}


const UpdateBook = (props: UpdateBookProps) => {
    const nav = useNavigate();
    const { id } = useParams()
    const [book, setBook] = useState('')

    useEffect(() => {
        GET(`/api/books/${id}`).then(book => setBook(book))
    })

    const editBook = () => {
        PUT(`/api/books/${id}`, {book} )
        .then(data => {
            console.log(book)
            nav(`/books/${id}`)
        })
    }
}