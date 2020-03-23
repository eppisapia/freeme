import React, { useState, useEffect } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonText } from '@ionic/react';
import { getService } from '../services/services';
import { getToken } from '../services/storage';
import { dataBalance } from '../services/interfaces';
import BalanceCard from '../components/BalanceCard';
import ChartItem from '../components/ChartItem';
import './Balance.css';
import AppHeader from '../components/AppHeader';

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
                <AppHeader title="FACTURACIÓN Y VENTAS" />
                <div className="balancePage">
                    <IonText className="balanceTitle">NOVIEMBRE 2018</IonText>
                    <BalanceCard imgSrc="assets/chart/ingresos-icon-relleno.svg" imgTitle="INGRESOS" subtitle="something" dateShow={balanceData.summary.dateShow} amount={balanceData.summary.debit.amount} vatAmount={balanceData.summary.debit.vat} colorText="primary" />
                    <BalanceCard imgSrc="assets/chart/gastos-icon-relleno.svg" imgTitle="GASTOS" subtitle="something" dateShow={balanceData.summary.dateShow} amount={balanceData.summary.credit.amount} vatAmount={balanceData.summary.credit.vat} colorText="tertiary" />
                </div>
                {balanceData.detail.labels.length > 0 ?
                    <ChartItem labels={balanceData.detail.labels} income={balanceData.detail.income} expense={balanceData.detail.expense} />
                    : null}
            </IonContent>
        </IonPage>
    );
};

export default Balance;

