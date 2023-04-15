import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../Firebase/firebase.config'

const auth = getAuth(app);

const Register = () => {
    const [email, setEmail] = useState('');
    const [emailBlar, setEmailBlar] = useState('')

    // input onchange function --------------------
    const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    // input blar function --------------------
    const handlePasswordBlar = (event) => {
        console.log(event.target.value);
        setEmailBlar(event.target.value)
    }

    // get all data from Form ----------------------
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        // create user in fb 
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>
            console.log(error))
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='your email' /> <br />

                <input onBlur={handlePasswordBlar} type="password" name="password" id="" placeholder='your password' /> <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;