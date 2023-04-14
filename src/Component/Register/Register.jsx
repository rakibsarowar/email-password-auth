import React from 'react';

const Register = () => {
    const handleEmailChange = (event) =>{
console.log(event.target.value)
    }
    return (
        <div>
                <h2>Please Register</h2>
                <form>
                    <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='your email' /> <br />

                    <input type="password" name="password" id="" placeholder='your password' /> <br />
                    <input type="submit" value="Register" />
                </form>
        </div>
    );
};

export default Register;