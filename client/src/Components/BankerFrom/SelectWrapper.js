import React from 'react'
import { TextField,MenuItem } from '@material-ui/core'
import {useField, useFormikContext} from 'formik'
const SelectWrapper = ({
    name,
    options,
    ...otherprops
}) => {
    const handleChange = evt =>{
        const {value} = evt.target
        setFieldValue(name,value) // update formik state
    }
    
    //the useFormikContext let us update the select value
    const {setFieldValue}  = useFormikContext(); 
    //the name is used to identify the field and the useField handles on change methods aswell as errors alongside Yup.
    const [field,meta]=useField(name)

    const configSelect={
        ...field,
        ...otherprops,
        select:true,
        variant:'outlined',
        fullWidth:true,
        onChange: handleChange
    }
    if (meta &&meta.touched&& meta.error) {
        configSelect.error = true
        configSelect.helperText = meta.error
      }
  return (
    <TextField {...configSelect}>
        {Object.keys(options).map((item,pos)=>{
            return(
                <MenuItem key={pos} value={item}>
                    {options[item]}
                </MenuItem>
            )
        })}
    </TextField>
  )
}

export default SelectWrapper