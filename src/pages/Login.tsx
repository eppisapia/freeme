import React from 'react';
import { IonPage, IonImg } from '@ionic/react';

import LoginForm from '../components/LoginForm';
import { RouteComponentProps } from 'react-router';

import './Login.css';

const Login: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage className="signinPage">
            <IonImg src='assets/sign-in/logo-freeme.svg' className="logo" />
            <LoginForm nav={props} />
        </IonPage>
    );
};

export default Login;