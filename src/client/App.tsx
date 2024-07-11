import React, { useState, useEffect } from "react";
import { GET, fetcher } from "./services/fetcher";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Books from "./views/Books";
import Login from "./views/Login";

interface AppProps {}

const App = (props: AppProps) => {
    const [data, setData] = useState("");
    return (
		<BrowserRouter>
			{/* <NavBar/> */}
		
			<div className='px-5 py-2 d-flex justify-content-center'>
				<Link to='/' className='btn btn-outline btn-primary m-3'>Home</Link>
                <Link to='/books' className='btn btn-outline btn-secondary m-3'>Books</Link>
				<Link to='/categories' className='btn btn-outline btn-light m-3'>Categories</Link>
				<Link to='/login' className='btn btn-outline btn-danger m-3'>Login/Register</Link>
                <Link to='/books/new' className='btn btn-outline btn-success m-3'>Add book!</Link>
				
			</div>

			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/books/:id' element={<BookDetails />} />
                <Route path='/categories' element ={< Categories />} />
				<Route path='/books/new' element={<AddBook />} /> */}
				<Route path='/login' element={<Login />} />
                <Route path='/books' element={<Books />} />
				
			</Routes>
		</BrowserRouter>


	);

};

export default App;