import React, { useState,useEffect } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormLabel } from '../BankerFrom/BFormElements'
import { Container, Grid } from '@material-ui/core'
import TextFieldWrapper from '../BankerFrom/TextFieldWrapper'
import { home_ownership, getAge, loan_intent } from './Data';
import SelectWrapper from '../BankerFrom/SelectWrapper'
import '../../Assets/css/form.css'
import ButtonWrapper from '../BankerFrom/Button'
import axios from 'axios';
// import { Container } from './styles';

const FORM_VALIDATION = Yup.object().shape({
    age: Yup.number().required('Required'),
    home_ownership:Yup.string().min(2),
    person_emp_length:Yup.number().integer().max(45).required('Required'),
    loan_intent:Yup.string().required('Required'),
    annual_income:Yup.number().required('Required'),
    loan_amnt:Yup.number().min(500).typeError('Please enter a valid number').required('Required!'),
    lnk:Yup.string().required("Required")
})


function ClientDemandeForm(handleClick) {

    const [user,setUser]=useState(null)
    useEffect(
        ()=> {fetch_client_data()}
        ,[]
    )

    const fetch_client_data = async ()=>{
        await axios.get('http://localhost:5000/api/protected', {
            headers: {
              "token": localStorage.getItem('token')
            }
        }).then(
            (res)=> {
                setUser(res.data)
                if (user) console.log(user)}
        ).catch((err)=>console.log(err))
    }

    const handleSubmit= async (values)=>{
        await axios.post('http://localhost:5000/loanapp/add',values).then(
            (res)=> {console.log(res.data)
                window.location.replace("http://localhost:3000/client/demands");}
        ).catch(err => console.log(err.data))
    }
    return <>
        <Container >
{       user?     <Formik
                initialValues={{
                    firstname:user.firstname,
                    lastname:user.lastname,
                    adress:user.adress,
                    rib:user.rib,
                    cin:user.cin,
                    age:user.age,
                    email:user.email,
                    phone:user.phone,
                    annual_income: '', 
                    person_emp_length: '',
                    loan_amnt: '',
                    home_ownership: 'RENT',
                    loan_intent: 'PERSONAL',
                    lnk: '',
                
                }
                }
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                    delete values.firstname
                    delete values.lastname
                    delete values.email
                    delete values.rib
                    delete values.cin
                    delete values.adress
                    delete values.phone
                    values.user_id=user._id.$oid
                    handleSubmit(values)
                    
                    
                }
                }
            >
                <Form>
                    <Grid container spacing={2} style={{marginTop:"-40px"}}>
                        <Grid item xs={12}>
                            <FormLabel>
                                Your Details
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
                        <Grid item xs={12}>
                            <TextFieldWrapper
                                disabled
                                name="rib"
                                label="Account Number"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldWrapper
                                disabled
                                name="email"
                                label="E-mail"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextFieldWrapper
                                disabled
                                name="cin"
                                label="ID Number"
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextFieldWrapper
                                disabled
                                name="age"
                                label="Age"
                            />
                        </Grid>
                        <Grid item xs={7}>
                            <TextFieldWrapper
                                disabled
                                name="phone"
                                label="Phone Number"
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextFieldWrapper
                                disabled
                                name="adress"
                                label="Address"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormLabel>
                                Loan Details
                            </FormLabel>
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="annual_income"
                                label="Annual Income declared"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="person_emp_length"
                                label="Employement length"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldWrapper
                                name="loan_amnt"
                                label="Loan Amount"
                            />
                        </Grid>
                       
                        <Grid item xs={6}>
                            <SelectWrapper
                                name="home_ownership"
                                label="Ownership of home"
                                options={home_ownership}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <SelectWrapper
                                name="loan_intent"
                                label="Loan Intent "
                                options={loan_intent}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextFieldWrapper
                                name="lnk"
                                label="Drive Link for Required Documents"
                            />
                        </Grid>
                        <Grid item xs={12}><></></Grid>
                        <Grid item xs={11}>
                            <></>
                        </Grid>
                        <Grid item xs={1}>
                            <ButtonWrapper >
                                Send
                            </ButtonWrapper>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>:<>Loading the data ...</>}
        </Container>
    </>;
}


export default ClientDemandeForm;