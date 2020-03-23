import React from 'react';
import './AppHeader.css';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon } from '@ionic/react';

interface ContainerProps extends React.Props<any> {
    title: string,
}
const AppHeader: React.FC<ContainerProps> = ({ title }) => {
    return (
        <IonHeader collapse="condense" >
            <IonToolbar class="appHeader">
                <IonButtons slot="start">
                    <IonMenuButton autoHide={false} color="dark" />
                </IonButtons>
                <IonTitle className="appTitle" color="primary" text-center>{title}</IonTitle>
                <IonButtons slot="end">
                    <IonIcon size="large" icon="close" color="primary"></IonIcon>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

    )
}

export default AppHeader;