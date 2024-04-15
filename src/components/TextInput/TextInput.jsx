import React from "react";
import TextField from "@mui/material/TextField";


function TextInput( {id, label, type, autoComplete}) {
  return (
    <TextField
      id= {id}
      label= {label}
      type= {type}
      autoComplete= {autoComplete}
    />
  );
}

export default TextInput;
