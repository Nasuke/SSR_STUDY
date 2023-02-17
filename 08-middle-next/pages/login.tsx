import React, { memo } from 'react';
import type { FC, ReactNode } from "react"

import { setCookies } from 'cookies-next';

import axios from 'axios';

interface IProps {
    children?: ReactNode
}

const Login: FC<IProps> = memo((props) => {
    const { children } = props

    function login() {
        setCookies('token', "zyc", {
            maxAge: 15
        })
    }
    function get() {
        axios.get("http://localhost:3000/juanpi/api/homeInfo").then(res => {
            console.log(res);
        })
    }
    return (
        <div className="Login">
            <div>Login</div>
            <button onClick={() => login()}>click to login</button>
            <button onClick={get}>click to getSome...</button>
        </div>
    )
})

export default Login

Login.displayName = "Login"  //方便之后调试