import React from 'react'
import './LoginBtn.scss'
import Button from "@mui/material/Button";

function LoginBtn({ children }) {
    return (
        <div className="btn-box">
            <Button variant="contained" className='btn'> {children}</Button>
        </div>
    )
}

export default LoginBtn