import React from 'react';

const Register = () => {
    return (
        <div>
                <h2>Please Register</h2>
                <form>
                    <input type="email" name="email" id="email" placeholder='your email' /> <br />

                    <input type="password" name="password" id="" placeholder='your password' /> <br />
                    <input type="submit" value="Register" />
                </form>
        </div>
    );
};

export default Register;