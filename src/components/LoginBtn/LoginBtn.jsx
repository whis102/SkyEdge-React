import React from 'react'
import './LoginBtn.scss'
import Button from "@mui/material/Button";

function LoginBtn({ children }) {
    return (
        <Button variant="contained" className='button'> {children}</Button>
    )
}

export default LoginBtn
