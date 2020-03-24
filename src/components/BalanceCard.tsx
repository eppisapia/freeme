import React from 'react';
import './BalanceCard.css';
import { IonText, IonLabel, IonImg } from '@ionic/react';

interface ContainerProps extends React.Props<any> {
    imgSrc: string,
    imgTitle: string,
    subtitle: string,
    dateShow: string,
    amount: number,
    vatAmount: number,
    colorText: string
}
const BalanceCard: React.FC<ContainerProps> = ({ imgSrc, imgTitle, subtitle, dateShow, amount, vatAmount, colorText }) => {
    return (
        <div className="cardContainer">
            <div className="cardPicContainer">
                <IonImg className="balancePic" src={imgSrc} />
                <IonText>{imgTitle}</IonText>
            </div>
            <IonText color={colorText} className="cardSubtitle">{subtitle}</IonText>
            <div className="amountContainer">
                <div className="columContainer">
                    <IonLabel color={colorText} className="amountLabel">{amount} €</IonLabel>
                    <IonText> {dateShow} </IonText>
                </div>
                <div className="columContainer">
                    <IonLabel color={colorText} className="vatLabel">{vatAmount} €</IonLabel>
                    <IonText>{"IVA"}</IonText>
                </div>
            </div>
        </div>

    )
}

export default BalanceCard;