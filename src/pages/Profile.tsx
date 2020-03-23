import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './Profile.css';
import Menu from '../components/Menu';
import { close } from 'ionicons/icons'
import { profileService } from '../services/services';
import { getToken } from '../services/storage';

const Profile: React.FC = () => {
  const [userData, setData] = useState({})
  const [hasError, setErrors] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getDsToken() {
      const result = await getToken("dstoken")
      setToken(result)
    }
    async function fetchData() {
      profileService('/users/myself/graph', await getToken("dstoken"))
        .then(res => setData(res.data))
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
      </IonContent>
    </IonPage>
  );
};

export default Profile;
