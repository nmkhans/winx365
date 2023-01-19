import React from 'react';
import { useLoginUserMutation } from '../../redux/api/api';
import "./Login.scss";
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginUser] = useLoginUserMutation()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const data = { email, password }

        const result = await loginUser(data);
        if (result?.data?.success) {
            localStorage.setItem("admin", JSON.stringify(result?.data?.data))
            navigate("/");
            window.location.reload();
            toast.success(result.data.message)
        } else {
            toast.error(result.error.data.message)
        }
    }

    return (
        <section className="Login">
            <div className="container">
                <div className="login__content">
                    <div className="login__header">
                        <h3>Login</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
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
                </div>
            </div>
        </section>
    );
};

export default Login;