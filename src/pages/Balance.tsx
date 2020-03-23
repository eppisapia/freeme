import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonText } from '@ionic/react';
import { getService } from '../services/services';
import { getToken } from '../services/storage';
import { dataBalance } from '../services/interfaces';
import BalanceCard from '../components/BalanceCard';
import './Balance.css';

const InitValues = {
    summary: {
        dateShow: "",
        credit: {
            amount: 0,
            vat: 0
        },
        debit: {
            amount: 0,
            vat: 0
        }
    },
    detail: {
        labels: [],
        income: [],
        expense: []
    },

}
const Balance: React.FC = () => {
    const [balanceData, setBalance] = useState<dataBalance>(InitValues)

    useEffect(() => {
        async function fetchData() {
            getService('/users/myself/graph', "TestMobile", await getToken("dstoken"))
                .then(res => {
                    setBalance(res.data.data.monthly)
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
                <div className="balancePage">
                    <IonText>{balanceData.summary.dateShow}</IonText>
                    <BalanceCard imgSrc="assets/chart/ingresos-icon-relleno.svg" imgTitle="INGRESOS" subtitle="something" dateShow={balanceData.summary.dateShow} amount={balanceData.summary.debit.amount} vatAmount={balanceData.summary.debit.vat} colorText="primary" />
                    <BalanceCard imgSrc="assets/chart/gastos-icon-relleno.svg" imgTitle="GASTOS" subtitle="something" dateShow={balanceData.summary.dateShow} amount={balanceData.summary.credit.amount} vatAmount={balanceData.summary.credit.vat} colorText="tertiary" />

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Balance;

