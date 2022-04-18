import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'
const DatePicker = ({
    name,
    ...otherPrors
}) => {
    const [field,meta]=useField(name)
    const configDatePicker={
        ...field,
        type:'date',
        variant:'outlined',
        fullWidth:true,
        InputLabelProps:{
            shrink:true
        },
        ...otherPrors,
    }
    if (meta && meta.touched && meta.error){
        configDatePicker.error=true
        configDatePicker.helperText=meta.error
    }
  return (
    <TextField {...configDatePicker}
      
    />

  )
}

export default DatePicker