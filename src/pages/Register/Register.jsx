import React from 'react';
import "./Register.scss";
import { useLoginUserMutation } from '../../redux/api/api';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [loginUser] = useLoginUserMutation()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const data = { name, email, password }
        console.log(data)
        // const result = await loginUser(data);
        // if (result?.data?.success) {
        //     localStorage.setItem("admin", JSON.stringify(result?.data?.data))
        //     navigate("/");
        //     window.location.reload();
        //     toast.success(result.data.message)
        // } else {
        //     toast.error(result.error.data.message)
        // }
    }

    return (
        <section className="Register">
            <div className="container">
                <div className="register__content">
                    <div className="register__header">
                        <h3>Register</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input__group">
                            <input type="text" placeholder="Enter name" name="name" />
                        </div>
                        <div className="input__group">
                            <input type="text" placeholder="Enter email" name="email" />
                        </div>
                        <div className="input__group">
                            <input type="password" placeholder="Enter password" name="password" />
                        </div>
                        <div className="input__group">
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                    <div className="register">
                        <p onClick={() => navigate("/login")}>Login</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;