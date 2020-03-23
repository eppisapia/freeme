import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon } from '@ionic/react';
import { getService } from '../services/services';
import { getToken } from '../services/storage';

import './Balance.css';

const Balance: React.FC = () => {
    const [balanceData, setBalance] = useState()

    useEffect(() => {
        async function fetchData() {
            getService('/users/myself/graph', "TestMobile", await getToken("dstoken"))
                .then(res => {
                    console.log("Data", res.data)
                    setBalance(res.data.data)
                })
                .catch(e => console.log(e))
        }
        fetchData();
    }, []);
    return (
        <IonPage>
            <IonContent>
                <IonHeader collapse="condense" class="profileHeader">
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton autoHide={false} />
                        </IonButtons>
                        <IonTitle size="small" color="primary" text-center>FACTURACION Y VENTAS</IonTitle>
                        <IonButtons slot="end">
                            <IonIcon size="large" icon="close" color="primary"></IonIcon>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

            </IonContent>
        </IonPage>
    );
};

export default Balance;

