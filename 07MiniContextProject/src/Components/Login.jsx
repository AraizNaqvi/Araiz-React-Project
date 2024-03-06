import React from 'react'
import UserContext from '../Context/UserContext';
import { useState } from 'react';
import { useContext } from 'react';

function Login() {
    const [username, setUSername] = useState('');
    const [pass, setPass] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, pass});
    }

    return (
        <div>
            <h2>Login</h2>
            <input
            type="text" 
            value={username}
            onChange={(e) => setUSername(e.target.value)}
            placeholder='Username' />
            
            <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder='Password' />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
