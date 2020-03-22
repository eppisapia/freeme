import React, { useState, useCallback } from 'react';
import './LoginForm.css';
import { IonInput, IonItem, IonIcon, IonButton, IonText, IonToast } from '@ionic/react';
import { loginService } from '../services/services';
import { setToken } from '../services/storage';

import { RouteComponentProps } from 'react-router';

interface ContainerProps extends React.Props<any> {
    nav: RouteComponentProps,
}

interface loginScreen {
    username: string;
    password: string;
    isLoading: boolean;
    error: string;
}
const LoginForm: React.FC<ContainerProps> = ({ nav }) => {
    const [data, setData] = useState<loginScreen>({ username: '', password: '', isLoading: false, error: '' });
    const [showError, setError] = useState(false);

    const doLogin = useCallback(() => {
        setData(prevState => ({ ...prevState, isLoading: true }));
        /**
         * Request post service with params
         */
        loginService('/in?type=userpassword&user=' + data.username + "&password=" + data.password)
            .then(res => {
                switch (res.status) {
                    case 200:
                        setToken("dstoken", res.data.dstoken).then(res => {
                            setData({ ...data, isLoading: false })
                            nav.history.push('mainPage')
                        }
                        );
                        break;
                    default:
                        console.log(res)
                        break;
                }
            }
            )
            .catch(e => {
                showToast(e.response ?.data ?.message)
            })
    }, [data, nav.history])

    const showToast = (message: string) => {
        setData({ ...data, error: message })
        setError(true)
    }


    return (
        <div className="container">
            <IonItem className="ion-item">
                <IonIcon src="assets/sign-in/usuario-icon.svg" />
                <IonInput className="signinInput" value={data.username} placeholder="Usuario" onIonChange={e => setData({ ...data, username: e.detail.value! })} clearInput></IonInput>
            </IonItem>
            <IonItem>
                <IonIcon src="assets/sign-in/contrasena-icon.svg" />
                <IonInput type="password" className="signinInput" value={data.password} placeholder="Contraseña" onIonChange={e => setData({ ...data, password: e.detail.value! })} clearInput></IonInput>
            </IonItem>
            <IonButton color="primary" className="signinButton" shape="round" onClick={() => doLogin()}>Entrar</IonButton>
            <IonText color="secondary">
                ¿No tienes cuenta? <a href="/">Regístrate</a>
            </IonText>
            <IonText color="secondary" id="terminos">
                Al unirte aceptas nuestros
                <br />
                <a href="/">Términos y condiciones</a> y <a href="/">Politica de privacidad</a>
            </IonText>

            <IonToast
                isOpen={showError}
                onDidDismiss={() => setError(false)}
                message={data.error}
                position="bottom"
                duration={1500}

            />
        </div>
    );
};

export default LoginForm;
