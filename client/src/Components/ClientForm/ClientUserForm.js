import React from 'react'
import { Formik, Form } from 'formik'
import {  FormLabel } from '../BankerFrom/BFormElements'
import { Container, Grid } from '@material-ui/core'
import TextFieldWrapper from '../BankerFrom/TextFieldWrapper'
import '../../Assets/css/form.css'
import ButtonWrapper from '../BankerFrom/Button'
import axios from 'axios';
import * as Yup from 'yup'

// import { Container } from './styles';

const FORM_VALIDATION = Yup.object().shape({
    firstname: Yup.string().required('First Name is required').min(2).max(30),
    lastname: Yup.string().required('Last Name is required').min(2).max(30),
    email: Yup.string().required('Email is required').email('Invalid email!'),
    phone: Yup.number().required('Phone is required').integer().typeError('Please enter a valid phone number!')
        .moreThan(9999999, 'Please enter a valid phone number!').lessThan(99999999, 'Please enter a valid phone number!'),
    rib: Yup.string().required('account number is required'),
    cin: Yup.string().required('Id number is required').length(8),
    adress: Yup.string().required('adress is required'),
    age:Yup.number().required('age is required').min(18).max(100)



})
function ClientUserForm({setedit,data}) {
    
    
    
    return <>
        <Container >
            <Formik
                initialValues={{
                    
   
                        rib: data.rib,
                        cin: data.cin,
                        adress :data.adress,
                        firstname: data.firstname,
                        lastname: data.lastname,
                        email:data.email,
                        phone: data.phone,
                        age:data.age
                    
                }
                }
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    
                    setedit(false)
                    axios.put(`http://localhost:5000/client/update/${data._id.$oid}`,{
                        
                        "adress":values.adress,
                        "phone":values.phone,
                        "age":values.age
                    })
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
                                name="cin"
                                label="ID Number"
                               
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
                            disabled
                                name="firstname"
                                label="First Name"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextFieldWrapper
                            disabled
                                name="lastname"
                                label="Last Name"
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
                            disabled
                                name="email"
                                label="Email"
                            />
                        </Grid>
                        
                
                        
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="adress"
                                label="Address"
                                
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

export default ClientUserForm;