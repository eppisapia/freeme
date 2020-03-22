import React from 'react';
import { IonPage, IonImg, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

import LoginForm from '../components/LoginForm';

import './Login.css';

const Login: React.FC = () => {
    return (
        <IonPage className="signinPage">
            <IonImg src='assets/sign-in/logo-freeme.svg' className="logo" />
            <LoginForm />
        </IonPage>
    );
};

export default Login;