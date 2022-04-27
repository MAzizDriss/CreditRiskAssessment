import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { FormLabel } from '../BankerFrom/BFormElements'
import { Container, Grid } from '@material-ui/core'
import TextFieldWrapper from '../BankerFrom/TextFieldWrapper'
import { home_ownership, getAge, loan_intent } from './Data';
import SelectWrapper from '../BankerFrom/SelectWrapper'
import '../../Assets/css/form.css'
import ButtonWrapper from '../BankerFrom/Button'
// import { Container } from './styles';
const INITIAL_FORM_STATE = {
    username: 'johndoe',
    rib: '1234567891234567',
    cin: '11858290',
    adress: '',
    email: 'John@Doe.mail',
    phone: "56160606",
    age: getAge('Wed Apr 02 1999 14:09:50 GMT+0100 (GMT+01:00)'),
    annual_income: '', 
    person_emp_length: '',
    loan_amnt: '',
    home_ownership: 'RENT',
    loan_intent: 'PERSONAL',
    lnk: '',


}
const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Required'),
    phone: Yup.number().integer().typeError('Please enter a valid phone number!').required('Required!')
        .moreThan(9999999, 'Please enter a valid phone number!').lessThan(99999999, 'Please enter a valid phone number!'),
    adress: Yup.string().required('Required'),
    home_ownership:Yup.string().min(2),
    person_emp_length:Yup.number().integer().max(45).required('Required'),
    loan_intent:Yup.string().required('Required'),
    annual_income:Yup.number().required('Required'),
    loan_amnt:Yup.number().min(500).typeError('Please enter a valid number').required('Required!'),
    lnk:Yup.string().required("Required")
})

const age = getAge('Wed Apr 02 1999 14:09:50 GMT+0100 (GMT+01:00)')
console.log(age)
function ClientDemandeForm(handleClick) {
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
                                Your Details
                            </FormLabel>
                        </Grid>
                        <Grid item xs={3}>
                            <TextFieldWrapper
                                disabled
                                name="username"
                                label="UserName"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                disabled
                                name="rib"
                                label="Account Number"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextFieldWrapper
                                disabled
                                name="cin"
                                label="ID Number"
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextFieldWrapper
                                disabled
                                name="age"
                                label="Age"
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <TextFieldWrapper
                                name="email"
                                label="E-mail"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="phone"
                                label="Phone Number"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextFieldWrapper
                                name="adress"
                                label="Adress"
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
            </Formik>
        </Container>
    </>;
}

export default ClientDemandeForm;