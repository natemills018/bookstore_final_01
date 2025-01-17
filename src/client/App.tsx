import React, { useState, useEffect } from "react";
import { GET, fetcher } from "./services/fetcher";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Books from "./views/Books";
import Login from "./views/Login";
import Register from "./views/Register";
import Categories from './views/Categories';
import AddBook from "./views/AddBook";
import BookDetails from "./components/BookDetails";
import UpdateBook from "./views/UpdateBook";
import PrivateRoute from './views/PrivateRoute'
import NavBar from "./components/Navbar";
import { TOKEN_KEY } from "./services/fetcher";

interface AppProps {}

const App = (props: AppProps) => {
    const [data, setData] = useState("");
    return (
		<BrowserRouter>
			<NavBar/>
		
			{/* <div className='px-5 py-2 d-flex justify-content-center'>
				<Link to='/' className='btn btn-outline btn-primary m-3'>Home</Link>
                <Link to='/register' className="btn btn-outline btn-primary m-3">Register</Link>
                <Link to='/books' className='btn btn-outline btn-secondary m-3'>Books</Link>
				<Link to='/categories' className='btn btn-outline btn-light m-3'>Categories</Link>
				<Link to='/login' className='btn btn-outline btn-danger m-3'>Login</Link>
                <Link to='/books/new' className='btn btn-outline btn-success m-3'>Add book!</Link>
			</div> */}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/books/:id' element={<BookDetails />} />
				<Route path='/books/:id/update' element={<PrivateRoute><UpdateBook /></PrivateRoute>} />
                <Route path='/categories' element ={< Categories />} />
				<Route path='/books/new' element={<PrivateRoute><AddBook /></PrivateRoute>} />
                <Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
                <Route path='/books' element={<PrivateRoute><Books /></PrivateRoute>} />
				
			</Routes>
		</BrowserRouter>


	);

};

export default App;