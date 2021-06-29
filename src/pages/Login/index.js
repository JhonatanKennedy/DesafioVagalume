import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { LoginPage, LoginContainer, LoginButton, ButtonContainer, InputContainer, AnimationContainer } from './styles';
import StyledTextField from '../../components/StyledTextField/styledTextField';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import Api from '../../api/api';
import { useHistory } from 'react-router-dom';
import ErrorModal from '../../components/ErrorModal/index';


export default function Login(){

    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const validationSchema = yup.object().shape({
        username: yup.string()
            .required('É necessário informar um username')
            .min(6,'É necessário ter ao menos 6 caracteres'),
        password: yup.string()
            .required('É necessário uma senha')
    });

    async function handleSubmit(data){
        try{
            const response = await Api.post('/login', data);
            const { token } = response.data;
            
            if(response.data.success === true){
                localStorage.setItem('@Vagalume:token',token);
                history.push('/');
            }else{
                setIsOpen(true);
            }
        }catch (err){
            alert(err.message);
        }
    }

    return(
        <LoginPage>
            <AnimationContainer>
                {isOpen && <ErrorModal onClose={() => {setIsOpen(false)}}/>}
                <LoginContainer>
                    <img src={Logo} alt='logo'/>
                    <Formik
                        initialValues={{username:'', password: ''}}
                        onSubmit = {data =>(handleSubmit(data))}
                        validationSchema={validationSchema}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <InputContainer>
                                    <b>Username</b>
                                    <Field type='text' 
                                        name='username' placeholder='Admin' 
                                        as={StyledTextField}
                                    />
                                    <br/>
                                    {errors.username && touched.username && <p>{errors.username}</p>}
                                    <br/>
                                    <b>Password</b>
                                        <Field type='password' 
                                            name='password' placeholder='******'
                                            as={StyledTextField}
                                            className='password'
                                        />                                                         
                                    <br/>
                                    {errors.password && touched.password && <p>{errors.password}</p>}
                                    <br/>
                                </InputContainer>
                                <ButtonContainer>
                                    <LoginButton type='submit'>Entrar</LoginButton>
                                </ButtonContainer>
                                
                            </Form>
                        )}
                        </Formik>
                </LoginContainer>
            </AnimationContainer>
        </LoginPage>
    )
}