import React from 'react';
import { Route as Teste, Redirect } from 'react-router-dom';


export default function PrivateRoutes({ isPrivate = false, component: Component, ...rest}){

    const token = localStorage.getItem('@Vagalume:token');

    return(
        <Teste
        {...rest} 
        render={() => {
            return isPrivate === !!token ? (
                <Component/>
            ) : (
                <Redirect to={{pathname: isPrivate ? '/login' : '/'}}/>
            )
        }}/>


    );
}