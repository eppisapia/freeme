import React, { useState } from 'react';
import './LoginForm.css';
import { IonInput, IonItem, IonIcon, IonButton, IonText } from '@ionic/react';

interface ContainerProps { }

const LoginForm: React.FC<ContainerProps> = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <div className="container">
            <IonItem className="ion-item">
                <IonIcon src="assets/sign-in/usuario-icon.svg" />
                <IonInput className="signinInput" value={username} placeholder="Usuario" onIonChange={e => setUsername(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
                <IonIcon src="assets/sign-in/contrasena-icon.svg" />
                <IonInput className="signinInput" value={password} placeholder="Contraseña" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonButton color="primary" className="signinButton" shape="round">Entrar</IonButton>
            <IonText color="secondary">
                ¿No tienes cuenta? <a href="/">Regístrate</a>
            </IonText>
            <IonText color="secondary" id="terminos">
                Al unirte aceptas nuestros
                <br />
                <a href="/">Términos y condiciones</a> y <a href="/">Politica de privacidad</a>
            </IonText>


        </div>
    );
};

export default LoginForm;
