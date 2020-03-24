import { IonContent, IonAvatar, IonPage, IonLabel } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Profile.css';
import { getService } from '../services/services';
import { getToken } from '../services/storage';
import { dataMySelf } from '../services/interfaces';
import ProfileItem from '../components/ProfileItem';
import AppHeader from '../components/AppHeader';
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
      <AppHeader title="TU CUENTA" />
      <IonContent>
        <div className="balanceContainer">
          <IonAvatar className="profilePic">
            <img src='assets/profile/avatar-icon.svg' />
          </IonAvatar>
          <div className="balanceName" >
            <IonLabel id="profileName">{userData.FreemeUser.nombre}</IonLabel>
            <div className="balance">
              <IonLabel color="primary">{userData.Balance.income}€</IonLabel>
              <IonLabel id="separator">{"|"}</IonLabel>
              <IonLabel color="tertiary">{userData.Balance.expense}€</IonLabel>
            </div>
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
