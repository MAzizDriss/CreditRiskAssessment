import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import { FormContainer, FormWrapper,Space, FormLabel} from './BFormElements'
import {Container,Typography,
        Grid,
        TextField} from '@material-ui/core'
import TextFieldWrapper from './TextFieldWrapper'
const INITIAL_FORM_STATE={
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    loan_amnt:'',
    loan_term:'',
    loan_interest_rate:'',
    loan_intent:'',
    annual_income:'',
    person_emp_length:'',
    dof:'',
    home_ownership:'',

}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required !').min(2).max(30),
    lastName:Yup.string().required('Required!').min(2).max(30),
    email: Yup.string().email('Invalid email!').required('Required'),
    phone: Yup.number().integer().typeError('Please enter a valid phone number!').required('Required!')
    .moreThan(9999999,'Please enter a valid phone number!').lessThan(99999999,'Please enter a valid phone number!'),
    loan_amnt:Yup.number().min(500).typeError('Please enter a valid number').required('Required!'),
    loan_term:Yup.number().min(6,"The loan term should be greater or equals 6 months").required('Required!'),
    loan_interest_rate:Yup.number(),
    loan_intent:Yup.string().matches(/(personal|education|medical|venture|homeimprovement|debtconsilidation)/),
    annual_income:Yup.number(),
    person_emp_length:Yup.number().integer().max(45),
    dof:Yup.boolean().typeError('it is a boolean'),
    home_ownership:Yup.string().matches(/(rent|own|mortgage|other)/),



})

const BankerUserForm = () => {
  return (
      <>
      <Space/>
        <Container maxWidth="sm">
        <h2>Banker User Form</h2>
        <Formik initialValues={{
            ...INITIAL_FORM_STATE}
        }
        validationSchema={FORM_VALIDATION}
        onSubmit={values => {
            console.log(values)}
        }
        >
             <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormLabel>
                            Client personal details
                        </FormLabel>
                    </Grid>
                    <Grid item xs={6}>
                            <TextFieldWrapper
                            name="firstName"
                            label="First Name" 
                            />
                    </Grid>
                    <Grid item xs={6}>
                    <TextFieldWrapper
                            name="lastName"
                            label="Last Name" 
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldWrapper
                            name="email"
                            label="E-mail" 
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldWrapper
                            name="phone"
                            label="Phone Number" 
                            />
                    </Grid>

                    <Grid item xs={12}>
                        <FormLabel>
                            Client loan details
                        </FormLabel>

                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldWrapper
                            name="loan_amnt"
                            label="Loan amount" 
                            />
                    </Grid>
                    <Grid item xs={8}>
                    <TextFieldWrapper
                            name="loan_term"
                            label="Term of the loan" 
                            />
                    </Grid>
                    <Grid item xs={4}>
                    <TextFieldWrapper
                            name="loan_interest_rate"
                            label="Loan interest rate" 
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldWrapper
                            name="loan_intent"
                            label="Intent of the loan" 
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldWrapper
                            name="annual_income"
                            label="Annual Income declared" 
                            />
                    </Grid>
                    <Grid item xs={7}>
                    <TextFieldWrapper
                            name="person_emp_length"
                            label="Employement length" 
                            />
                    </Grid>
                    <Grid item xs={5}>
                    <TextFieldWrapper
                            name="dof"
                            label="Defaulted before? " 
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldWrapper
                            name="home_ownership"
                            label="Ownership of home " 
                            />
                    </Grid>
                    
                </Grid>
            </Form>
        </Formik>
    </Container>
    <Space/>
    </>
  )
}

export default BankerUserForm