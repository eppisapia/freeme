import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonImg, IonLabel, IonText } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Profile.css';
import { getService } from '../services/services';
import { getToken } from '../services/storage';
import { dataMySelf } from '../services/interfaces';
import ProfileItem from '../components/ProfileItem';
/**
 * Initial value of the Profile Component State
 */
const InitValues = {
  FreemeUser: {
    movil: "",
    nif_nie: "",
    email: "",
    nombre: ""
  },
  User: {
    name: "",
    address: "",
    postalcode: "",
    irpf: ""
  },
  Balance: {
    income: 0,
    expense: 0
  }
}

const Profile: React.FC = () => {
  const [userData, setData] = useState<dataMySelf>(InitValues)

  useEffect(() => {
    async function fetchData() {
      getService('/users/myself', "Production", await getToken("dstoken"))
        .then(res => {
          setData(res.data.data)
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
            <IonTitle size="small" color="primary" text-center>TU CUENTA</IonTitle>
            <IonButtons slot="end">
              <IonIcon size="large" icon="close" color="primary"></IonIcon>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <div className="balanceContainer">
          <IonImg className="profilePic" src='assets/profile/avatar-icon.svg' />
          <div className="balanceName" >
            <IonLabel id="profileName">{userData.FreemeUser.nombre}</IonLabel>
            <IonText className="balance">
              <IonLabel color="primary">{userData.Balance.income}€ </IonLabel>
              |
              <IonLabel color="tertiary"> {userData.Balance.expense}€</IonLabel>
            </IonText>
          </div>
        </div>
        <ProfileItem title="Nombre y apellidos" value={userData.User.name} />
        <ProfileItem title="Email" value={userData.FreemeUser.email} />
        <ProfileItem title="Teléfono" value={userData.FreemeUser.movil} />
        <ProfileItem title="NIF / NIE" value={userData.FreemeUser.nif_nie} />
        <ProfileItem title="Dirección" value={userData.User.address} />
        <ProfileItem title="Código Postal" value={userData.User.postalcode} />
        <ProfileItem title="Tipo de IRPF" value={userData.User.irpf + "%"} />
        <ProfileItem title="Cambiar Contraseña" value="XXXXXXXXXX" />
      </IonContent>
    </IonPage>
  );
};

export default Profile;
