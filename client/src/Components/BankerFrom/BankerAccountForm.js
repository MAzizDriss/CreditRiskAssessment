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
    username:'CoolestUser58',
    rib: '1234567891234567',
    cin: '11858290',
    adress :'',
    firstname: 'John',
    lastname: 'Doe',
    email:'John@Doe.mail',
    phone: "56160606",
    age:'25'
}
const FORM_VALIDATION = Yup.object().shape({
    username:Yup.string(),
    firstname: Yup.string().required('First Name is required').min(2).max(30),
    lastname: Yup.string().required('Last Name is required').min(2).max(30),
    email: Yup.string().required('Email is required').email('Invalid email!'),
    phone: Yup.number().required('Phone is required').integer().typeError('Please enter a valid phone number!')
        .moreThan(9999999, 'Please enter a valid phone number!').lessThan(99999999, 'Please enter a valid phone number!'),
    rib: Yup.string().required('account number is required').length(16),
    cin: Yup.string().required('Id number is required').length(8),
    adress: Yup.string().required('adress is required')



})
function BankerAccountForm({setedit}) {
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
                    setedit(false)
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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormLabel>
                                Personal details
                            </FormLabel>
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="firstname"
                                label="First Name"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="lastname"
                                label="Last Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="cin"
                                label="ID Number"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="email"
                                label="Email"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="age"
                                label="Age"
                            />
                        </Grid>
                
                        
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="adress"
                                label="Adress"
                                
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="phone"
                                label="Mobile"
                                
                            />
                        </Grid>
                       
                        <Grid item xs={10}>
                            <></>
                        </Grid>
                        <Grid item xs={2}>
                            <ButtonWrapper>
                                        Submit
                            </ButtonWrapper>
                        </Grid>
                    </Grid>
                </Form>
                )}
                
            </Formik>
        </Container>
    </>;
}

export default BankerAccountForm;