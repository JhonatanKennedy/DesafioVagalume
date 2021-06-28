import React, { useContext } from 'react';
import Logo from '../../assets/logo.png';
import { LoginPage, LoginContainer, LoginButton, ButtonContainer, InputContainer, AnimationContainer, InputPass } from './styles';
import StyledTextField from '../../components/StyledTextField/styledTextField';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';


export default function Login(){

    const { signIn } = useContext(AuthContext);
    const history = useHistory();

    const validationSchema = yup.object().shape({
        username: yup.string()
            .required('É necessário informar um username')
            .min(6,'É necessário ter ao menos 6 caracteres'),
        password: yup.string()
            .required('É necessário uma senha')
    });

    async function handleSubmit(data){
        try{
            console.log(data)
            signIn(data);
            history.push('/')
            window.location.reload();
        }catch (err){
            alert(err.message);
        }
    }

    function ShowPass(){
        const input = document.querySelector('.password')
        
        if(input.getAttribute('type') == 'password'){
            input.setAttribute('type', 'text');
        }else{
            input.setAttribute('type','password');
        }
    }
    return(
        <LoginPage>
            <AnimationContainer>
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