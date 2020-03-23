import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuToggle, IonLabel } from '@ionic/react';
import { RouteComponentProps, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

interface Page {
    title: string;
    path: string;
}
const pages: Page[] = [
    { title: 'TU CUENTA', path: '/profile' },
    { title: 'FACTURACION Y VENTAS', path: '/' },
    { title: 'Salir', path: '/login' }

];
interface ContainerProps { }

const Menu: React.FC<ContainerProps> = () => {
    return (
        <IonMenu contentId="main" menuId="main" side="start">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle>
                        <NavLink to="/profile">
                            <IonItem button>
                                <IonLabel>Tu Cuenta</IonLabel>
                            </IonItem>
                        </NavLink>
                    </IonMenuToggle>
                    <IonMenuToggle>
                        <NavLink to="/login">
                            <IonItem button>
                                <IonLabel>Salir</IonLabel>
                            </IonItem>
                        </NavLink>
                    </IonMenuToggle>
                </IonList>
            </IonContent>
        </IonMenu>
    )
};

export default Menu;