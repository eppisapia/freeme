import React from 'react';
import './ProfileItem.css';
import { IonText } from '@ionic/react';

interface ContainerProps extends React.Props<any> {
    title: string,
    value: string
}

const ProfileItem: React.FC<ContainerProps> = ({ title, value }) => {
    return (
        <div className={value.length > 20 ? "columDisplay" : "profileItem"}>
            <IonText>{title}</IonText>
            <IonText className={value.indexOf("%") > -1 ? "coloredLabel" : ""}>{value}</IonText>
        </div>

    )
}

export default ProfileItem;