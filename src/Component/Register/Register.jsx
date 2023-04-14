import React, { useState } from 'react';

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.email.value)
    }
    return (
        <div>
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