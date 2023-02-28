import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import api from "../../services/api";
import Input from "../../components/form/input/input";
import { LoginModal } from "./style";


export default function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''

        },
        onSubmit: values => {
            try {
                const log = api.post('/login', {
                    email: values.email,
                    password: values.password
                })
                .then(response => response.data)
                .then((data) => {
                    console.log("RESPONSE",data)

                    if (data.auth) navigate("/")
                    else alert("Email or Password incorrect")
                })
                if (log) console.log("log", log)    
            } catch (error) {
                alert("Please type a correct a email and Password")
            }
            
        },
    })

    return (
        <LoginModal>
            <p>Please Enter with your email and Password</p>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Input
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <Link to="/create-account">Create Account</Link>
                <Input
                    type="submit"
                    value="Login"
                >
                    Login
                </Input>
            </form>
        </LoginModal>
    )
}