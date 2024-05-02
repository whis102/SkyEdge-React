import React from "react"
import TextField from "@mui/material/TextField"
import './TextInput.scss'

function TextInput({ id, label, type, autoComplete }) {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      autoComplete={autoComplete}
      fullWidth
    />
  )
}

export default TextInput
