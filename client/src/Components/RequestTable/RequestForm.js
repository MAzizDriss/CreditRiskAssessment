import React, { useState, useEffect } from 'react'
import { Grid,Container } from '@material-ui/core';
import Controls from "../Controls/Controls";
import { useForm, Form } from '../RequestTable/UseForm';
import * as clientService from "../Services/ClientServices";
import { Space, FormLabel} from '../BankerFrom/BFormElements'

import '../../Assets/css/form.css'


 const loan_intent= [
    { id: 'PERSONAL', title: 'Personal' },
    { id: 'EDUCATION', title: 'Education' },
    { id: 'MEDICAL', title: 'Medical' },
    { id: 'VENTURE', title: 'Venture' },
    { id: 'HOMEIMPROVEMENT', title: 'Home improvement' },
    { id: 'DEBTCONSILIDATION', title: 'Debt Consilidation' },
   
]
const home_ownership= [
   { id: 'own', title: 'OWN' },
  { id: 'RENT', title: 'Rent' },
   { id: 'MORTGAGE', title: 'Mortgage' },
   { id: 'OTHER', title: 'other' },
  
]




const initialFValues = {
    id: 0,
    firstName:'John',
    lastName:'Doe',
    email:'John@Doe.mail',
    phone:"56160606",
    loan_amnt:'',
    loan_term:'',
    loan_interest_rate:'',
    loan_intent:'',
    annual_income:'',
    person_emp_length:'',
    dof:'',
    home_ownership:'',
    age:30,
    message:'',
    files_verified:''
}

export default function RequestForm(props) {
    const { addOrEdit, recordForEdit ,add, edit} = props
    const [open,setOpen]=useState(false)

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

         if (fieldValues == values)
             return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
         if (validate()) {
            clientService.insertClient(values)
            resetForm()
            addOrEdit(values, resetForm);
         }
        
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Container  className="Form-container">
        <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                        <FormLabel>
                            Client personal details
                        </FormLabel>
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        error={errors.firstName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                            name="lastName"
                            label="Last Name"
                            value={values.lastName}
                            onChange={handleInputChange}
                            error={errors.lastName}
                            />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        // error={errors.email}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Controls.Input
                            name="phone"
                            label="Phone Number" 
                            value={values.phone}
                            onChange={handleInputChange}
                            // error={errors.phone}
                            />
                </Grid>
                {/* <Grid item xs={2}>
                         <Controls.Select
                            name="age"
                            label="Age" 
                            options={ages}
                            value={values.age}
                            onChange={handleInputChange}
                            error={errors.age}
                            /> 
                </Grid>
               
                <Grid item xs={12}>
                        <FormLabel>
                            Client loan details
                        </FormLabel>

                </Grid>
                
                <Grid item xs={12}>
                    <Controls.Input
                            name="loan_amnt"
                            label="Loan amount"
                            value={values.loan_amnt}
                            onChange={handleInputChange}
                            // error={errors.loan_amnt} 
                            />
                </Grid>
                <Grid item xs={8}>
                    <Controls.Input
                            name="loan_term"
                            label="Term of the loan" 
                            value={values.loan_term}
                            onChange={handleInputChange}
                            // error={errors.loan_term}
                            />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                            name="loan_interest_rate"
                            label="Loan interest rate" 
                            value={values.loan_interest_rate}
                            onChange={handleInputChange}
                            // error={errors.loan_interest_rate}
                            />
                </Grid>
                <Grid item xs={7}>
                    <Controls.Input
                            name="annual_income"
                            label="Annual Income declared" 
                            value={values.annual_income}
                            onChange={handleInputChange}
                            // error={errors.annual_income}
                            />
                </Grid>
                <Grid item xs={5}>
                     <Controls.Select
                            name="loan_intent"
                            label="Loan Intent " 
                           options={loan_intent()}
                            value={values.loan_intent}
                            onChange={handleInputChange}
                            // error={errors.loan_intent}
                            />  
                </Grid>
                <Grid item xs={7}>
                    <Controls.Input
                            name="person_emp_length"
                            label="Employement length" 
                            value={values.person_emp_length}
                            onChange={handleInputChange}
                            // error={errors.person_emp_length}
                            />
                </Grid>
                <Grid item xs={5}>
                    {/* <Controls.Select
                            name="dof"
                            label="Defaulted before? " 
                            options={{true:'Yes',false:'No'}}
                            value={values.dof}
                            onChange={handleInputChange}
                            error={errors.dof}
                            /> 
                </Grid>
                <Grid item xs={7}>
                     <Controls.Select
                            name="home_ownership"
                            label="Ownership of home" 
                            options={home_ownership}
                            value={values.home_ownership}
                            onChange={handleInputChange}
                            error={errors.home_ownership}
                            /> 
                </Grid>
                <Grid item xs={5}>
                        {/* <Controls.Select
                                name="files_verified"
                                label="Files verified ?"
                                options={{true:'yes',false:'no'}}
                                value={values.files_verified}
                                onChange={handleInputChange}
                                error={errors.files_verified}
                        /> 
                    <FormLabel>
                        Statement of purpose
                   </FormLabel>
                <Grid item xs={12}>
                        <Controls.Input
                            name="message"
                            label="Statement Of Purpose"
                            multiline={true}
                            rows={4}
                            value={values.message}
                            onChange={handleInputChange}
                            // error={errors.message}
                        />
                </Grid> */}
                <Grid item xs={9}>
                        <></>
                </Grid>
                <Grid item xs={2}>
                    <Controls.Button
                            type="submit"
                            text="Submit" />
                    <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                </Grid>
                
            </Grid>
        </Form>
        </Container>
    )
}