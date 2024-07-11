import React, { useState } from "react";
import { POST, TOKEN_KEY } from "../services/fetcher";


const Login = () => {   
    const [isLogin, setisLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleLogin = () => {
    const url = isLogin ? '/auth/login': '/auth/register';
    POST(url, {email, password}).then((token) => {
        localStorage.setItem(TOKEN_KEY, token)
        alert('You logged in!')
    })
}


return (
<div className="card-body">
      <div>
        <h1 className="d-flex justify-content-center">{isLogin ? 'Logging in.': 'Registering.'} Need to <button onClick={() => setisLogin(!isLogin)}>swtich?</button>
        </h1>
        

        <div className="d-flex justify-content-center m-2">

        {/* {!isLogin && <input 
            className="m-2" 
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        
        />} */}
          <input
            className="m-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="m-2"
            placeholder="Password"
            // type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center m-2">
          <button
            className="rounded mx-4"
            onClick={handleLogin}
          >
            {isLogin ? 'Log in' : 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

