import React, { useEffect,useState } from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Sidebar from '../Sidebar/Sidebar'
import SelectWrapper from './SelectWrapper'
import { Space, FormLabel} from './BFormElements'
import {Container,Grid,TextField} from '@material-ui/core'
import TextFieldWrapper from './TextFieldWrapper'
import { loan_intent,home_ownership, ages ,grade} from './Data'
import '../../Assets/css/form.css'
import ButtonWrapper from './Button'
import {Link } from 'react-router-dom'
import UseForm from './UseForm'
import axios from 'axios'
import ResultCard from '../ResultCard/ResultCard'


const INITIAL_FORM_STATE={

    firstName:'',
    lastName:'',
    email:'',
    phone:"",
    loan_amnt:'',
    loan_term:'',
    loan_interest_rate:'',
    loan_intent:'',
    annual_income:'',
    person_emp_length:'',
    dof:false,
    home_ownership:'',
    age:'',
    status:'Pending',
    mail_status:'Not sent',
    message:'',
    files_verified:''

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
    loan_intent:Yup.string().required('Required'),
    annual_income:Yup.number(),
    person_emp_length:Yup.number().integer().max(45),
    dof:Yup.boolean().typeError('it is a boolean'),
    home_ownership:Yup.string().min(2),
    age:Yup.number().integer().required('Required'),
    message:Yup.string(),
    files_verified:Yup.boolean().required('Required !')


})

const BankerUserForm = (props) => {

     const {recordForEdit,edit } = props

      useEffect(() => {
        if (recordForEdit !== null)
 {           setValues({
                ...recordForEdit
            })
        
            fetch_client_data(recordForEdit.user_id.$oid)
            console.log(user)
        }}, [recordForEdit])
    
        const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = UseForm(INITIAL_FORM_STATE, true, FORM_VALIDATION);




    const handleSubmit = e =>{
            if (FORM_VALIDATION ){
                {      
                        axios.put(`http://localhost:5000/admin/loanapp/apps/${values._id}`,{
                                'loan_interest_rate':values.loan_interest_rate,
                               ' emp_id':values.emp_id,
                                'dof':values.dof,
                                'status':values.status,
                                'mail_status':values.mail_status
                        }).then(response => {
                          console.log("element modifier et  enregistées dans la base de données ")
                      }).catch(error => {
                      
                      console.log(error)
                    })}
            }
    }
    const [user,setUser]= useState(null)
    const [showResults,setShowResults]=useState(false)

    const fetch_client_data = async (id)=>{
        await axios.get(`http://localhost:5000/user/${id}`, {
            headers: {
              "token": localStorage.getItem('token')
            }
        }).then(
            (res)=> {
                setUser(res.data)
                if (user) console.log(user)}
        ).catch((err)=>console.log(err))
    }

  return (
      <>
    
        <Container  className="Form-container">
       {user ? <>{
           !showResults? <Formik initialValues={{
                firstName:user.firstname,
                lastName:user.lastname,
                email:user.email,
                phone:user.phone,
                age:user.age,
                files_verified:false,
                grade:'A',
                dof:false,
                mail_status:false,
                status:"in_progress",

            ...recordForEdit}
        }
        validationSchema={FORM_VALIDATION}
        
        onSubmit={(values) => {  
            setShowResults(true)
            console.log('action performed')
            // axios.put(`http://localhost:5000/admin/loanapp/update/${values._id.$oid}`,{
            //     'loan_interest_rate':values.loan_interest_rate,
            //     ' emp_id':values.emp_id,
            //     'dof':values.dof,
            //     'status':values.status,
            //     'mail_status':values.mail_status
            // })
        }
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
                            disabled="true"
                            />
                    </Grid>
                    <Grid item xs={6}>
                    <TextFieldWrapper
                            name="lastName"
                            label="Last Name"
                            disabled="true"
                            />
                    </Grid>
                    <Grid item xs={12}>
                    <TextFieldWrapper
                            name="email"
                            label="E-mail" 
                            disabled="true"
                            />
                    </Grid>
                    <Grid item xs={10}>
                    <TextFieldWrapper
                            name="phone"
                            label="Phone Number" 
                            disabled="true"
                            />
                    </Grid>
                    <Grid item xs={2}>
                    <SelectWrapper
                            name="age"
                            label="Age" 
                            options={ages}
                            disabled="true"
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
                   <Grid item xs={2}>
                   <SelectWrapper
                            name="grade"
                            label="Loan Grade" 
                            options={grade}
                        
                            />
                       </Grid>
                       <Grid item xs={5}>
                   <SelectWrapper
                            name="mail_status"
                            label="Mail Status" 
                            options={{true:'Sent',false:'Not sent'}}
                        
                            />
                       </Grid>
                       <Grid item xs={5}>
                   <SelectWrapper
                            name="status"
                            label="Status" 
                            options={{treated:'Treated',in_progress:'In Progress'}}
                            
                            />
                       
                    </Grid>
                    
                   <Grid item xs={11}>
                        <></>
                   </Grid>
                    <Grid item xs={1}>
                         
                                <ButtonWrapper >
                                        Submit
                                </ButtonWrapper>
                        
                    </Grid>
                </Grid>
            </Form>
        </Formik>:<ResultCard loan_data={values} user={user}/>}</>:<>Loading...</>}
    </Container>
    <Space/>
    </>
  )
}

export default BankerUserForm