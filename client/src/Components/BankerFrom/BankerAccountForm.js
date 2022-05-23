import React, { useState } from 'react';
import { Formik, Form, useprops } from 'formik'
import * as Yup from 'yup'
import {Button}from '@material-ui/core'
import { Space, FormLabel } from '../BankerFrom/BFormElements'
import { Container, Grid, TextField } from '@material-ui/core'
import TextFieldWrapper from '../BankerFrom/TextFieldWrapper'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import '../../Assets/css/form.css'
import ButtonWrapper from '../BankerFrom/Button'
import axios from 'axios';
// import { Container } from './styles';
const INITIAL_FORM_STATE = {
    
    rib: '1234567891234567',
    cin: '11858290',
    adress: '',
    firstname: 'John',
    lastname: 'Doe',
    email: 'John@Doe.mail',
    phone: "56160606",
    date: '',
    age:'25'
}
const FORM_VALIDATION = Yup.object().shape({
    firstname: Yup.string().required('Required !').min(2).max(30),
    lastname: Yup.string().required('Required!').min(2).max(30),
    email: Yup.string().email('Invalid email!').required('Required'),
    phone: Yup.number().integer().typeError('Please enter a valid phone number!').required('Required!')
        .moreThan(9999999, 'Please enter a valid phone number!').lessThan(99999999, 'Please enter a valid phone number!'),
    date: Yup.date().required('Required'),
    rib: Yup.string().length(16).required('Required'),
    cin: Yup.string().length(8),
    location: Yup.string().required('Required'),
    adress: Yup.string().required('Required')



})
function BankerAccountForm(handleClick) {
    const [selectedDate, handleDateChange] = useState()

    return <>
        <Container >
            <Formik
                initialValues={{
                    ...INITIAL_FORM_STATE
                }
                }
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    console.log(values)
                    //the axios is here
                }
                }
            >
                {props =>(
                    <Form onSubmit={props.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormLabel>
                                Account details
                            </FormLabel>
                        </Grid>
                        <Grid item xs={4}>
                            <TextFieldWrapper
                                disabled
                                name="username"
                                label="Username"
                               
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextFieldWrapper
                                disabled
                                name="rib"
                                label="Account Number"
                                value={props.values.rib}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormLabel>
                                Personal details
                            </FormLabel>
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                value={props.values.firstname}
                                name="firstname"
                                label="First Name"
                                onChange={props.handleChange}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="lastname"
                                label="Last Name"
                                value={props.values.lastname}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="cin"
                                label="ID Number"
                                value={props.values.cin}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="email"
                                label="Email"
                                value={props.values.email}
                                onChange={props.handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="age"
                                label="Age"
                                value={props.values.age}
                                onChange={props.handleChange}
                            />
                        </Grid>
                
                        
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="adress"
                                label="Adress"
                                onChange={props.handleChange}
                                value={props.adress}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="phone"
                                label="Mobile"
                                onChange={props.handleChange}
                                value={props.values.phone}
                            />
                        </Grid>
                       
                        <Grid item xs={10}>
                            <></>
                        </Grid>
                        <Grid item xs={2}>
                            <Button type="submit" variant="contained" >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
                )}
                
            </Formik>
        </Container>
    </>;
}

export default BankerAccountForm;