import React from 'react';
import { TextField, withStyles } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

const Styled= withStyles({
    root: {
        '& label.Mui-focused': {
          color: deepPurple[500],
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: deepPurple[500],
        },
      },
})(TextField);
export default function StyledTextField({placeholder,...props}){
    return(
        <Styled placeholder={placeholder} {...props}/>
    );
}
