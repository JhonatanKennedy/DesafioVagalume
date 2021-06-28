import React from 'react';
import Login from '../pages/Login/index';
import Main from '../pages/Main/index';
import Client from '../pages/Client/index';
import PrivateRoutes from './routes.private';
import { BrowserRouter, Switch } from 'react-router-dom';



export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoutes path='/Login' component={Login} />
                <PrivateRoutes exact path='/' component={Main} isPrivate={true}/>
                <PrivateRoutes path='/Client/:id/:name' component={Client} isPrivate={true} />
            </Switch>
        </BrowserRouter>
    );

}