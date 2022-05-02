import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Sidebar from '../Sidebar/Sidebar'
import SelectWrapper from './SelectWrapper'
import { Space, FormLabel} from './BFormElements'
import {Container,Grid,TextField} from '@material-ui/core'
import TextFieldWrapper from './TextFieldWrapper'
import { loan_intent,home_ownership, ages } from './Data'
import '../../Assets/css/form.css'
import ButtonWrapper from './Button'
import RadioWrapper from './RadioWrapper'
import RTable from '../RequestTable/Table'
import {Link } from 'react-router-dom'
const INITIAL_FORM_STATE={

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
const typeItems = [
        { id: 'treated', title: 'Treated' },
        { id: 'in progress', title: 'In progress' },
       
    ]

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required !').min(2).max(30),
    lastName:Yup.string().required('Required!').min(2).max(30),
    email: Yup.string().email('Invalid email!').required('Required'),
    phone: Yup.number().integer().typeError('Please enter a valid phone number!').required('Required!')
    .moreThan(9999999,'Please enter a valid phone number!').lessThan(99999999,'Please enter a valid phone number!'),
    loan_amnt:Yup.number().min(500).typeError('Please enter a valid number').required('Required!'),
    loan_term:Yup.number().min(6,"The loan term should be greater or equals 6 months").required('Required!'),
    loan_interest_rate:Yup.number(),
    loan_intent:Yup.string().required('Required'),
    annual_income:Yup.number(),
    person_emp_length:Yup.number().integer().max(45),
    dof:Yup.boolean().typeError('it is a boolean'),
    home_ownership:Yup.string().min(2),
    age:Yup.number().integer().required('Required'),
    message:Yup.string(),
    files_verified:Yup.boolean().required('Required !')


})

const BankerUserForm = () => {
  return (
      <>
      <Sidebar/>
        <Container  className="Form-container">
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
                    <Grid item xs={10}>
                    <TextFieldWrapper
                            name="phone"
                            label="Phone Number" 
                            />
                    </Grid>
                    <Grid item xs={2}>
                    <SelectWrapper
                            name="age"
                            label="Age" 
                            options={ages}
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
                    <Grid item xs={7}>
                    <TextFieldWrapper
                            name="annual_income"
                            label="Annual Income declared" 
                            />
                    </Grid>
                    <Grid item xs={5}>
                    <SelectWrapper
                            name="loan_intent"
                            label="Loan Intent " 
                            options={loan_intent}
                            />
                    </Grid>
                    <Grid item xs={7}>
                    <TextFieldWrapper
                            name="person_emp_length"
                            label="Employement length" 
                            />
                    </Grid>
                    <Grid item xs={5}>
                    <SelectWrapper
                            name="dof"
                            label="Defaulted before? " 
                            options={{true:'Yes',false:'No'}}
                            />
                    </Grid>
                    <Grid item xs={7}>
                    <SelectWrapper
                            name="home_ownership"
                            label="Ownership of home" 
                            options={home_ownership}
                            />
                    </Grid>
                    <Grid item xs={5}>
                        <SelectWrapper
                                name="files_verified"
                                label="Files verified ?"
                                options={{true:'yes',false:'no'}}
                        />
                    </Grid>
                   <Grid item xs={12}>
                        <RadioWrapper
                                name="status"
                                label="Status"
                                items={typeItems}
                        />
                    </Grid>
                    <FormLabel>
                        Statement of purpose
                   </FormLabel>
                   <Grid item xs={12}>
                        <TextFieldWrapper
                        name="message"
                        label="Statement Of Purpose"
                        multiline={true}
                        rows={4}
                        />
                   </Grid>
                   <Grid item xs={9}>
                        <></>
                   </Grid>
                    <Grid item xs={2}>
                         <Link to ="/admin/table" element= {<RTable/>}> 
                                <ButtonWrapper>
                                        Submit
                                </ButtonWrapper>
                          </Link>
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