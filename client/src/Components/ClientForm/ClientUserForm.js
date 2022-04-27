import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { Space, FormLabel } from '../BankerFrom/BFormElements'
import { Container, Grid, TextField } from '@material-ui/core'
import TextFieldWrapper from '../BankerFrom/TextFieldWrapper'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { countries } from './Data';
import '../../Assets/css/form.css'
import ButtonWrapper from '../BankerFrom/Button'
import DateFnsUtils from '@date-io/date-fns';
// import { Container } from './styles';
const INITIAL_FORM_STATE = {
    username: 'johndoe',
    rib: '1234567891234567',
    cin: '11858290',
    adress: '',
    firstname: 'John',
    lastname: 'Doe',
    email: 'John@Doe.mail',
    phone: "56160606",
    date: '',
    location: ''
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
function ClientUserForm(handleClick) {
    const [selectedDate, handleDateChange] = useState();
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
                }
                }
            >
                <Form>
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

                                name="location"
                                label="Birth Location"
                            />
                        </Grid>
                    { /* <Grid item xs={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    autoOk
                                    name='date'
                                    variant="inline"
                                    inputVariant="outlined"
                                    label="Date of Birth"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    InputAdornmentProps={{ position: "start" }}
                                    onChange={date => handleDateChange(date)}
                                />
                            </MuiPickersUtilsProvider>
            </Grid>*/}
                        
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
                            <ButtonWrapper >
                                Submit
                            </ButtonWrapper>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </Container>
    </>;
}

export default ClientUserForm;