import React from 'react';
import { Link, useNavigate, redirect } from 'react-router-dom';
import { TOKEN_KEY } from '../services/fetcher';

interface navbarProp { 

}

const NavBar = (props: navbarProp) => {

        return(
            <div className='px-5 py-2 d-flex justify-content-center'>
				<Link to='/' className='btn btn-outline btn-primary m-3'>Home</Link>
                <Link to='/register' className="btn btn-outline btn-primary m-3">Register</Link>
                <Link to='/books' className='btn btn-outline btn-secondary m-3'>Books</Link>
				<Link to='/categories' className='btn btn-outline btn-light m-3'>Categories</Link>
				<Link to='/login' className='btn btn-outline btn-danger m-3'>Login</Link>
                <Link to='/books/new' className='btn btn-outline btn-success m-3'>Add book!</Link>
				
				
				
				<button onClick={() => {
  						localStorage.removeItem(TOKEN_KEY);
  						window.location.href = "/login";
						}} className="btn btn-dark">Logout</button>
              
				
			</div>
        )
}


export default NavBar;