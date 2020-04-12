import React from "react"
import { Link } from "react-router-dom";
import AuthTemplate from "./AuthTemplate";
import AuthForm from "./AuthForm";

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm />
        </AuthTemplate>
    )
}

export default RegisterPage;