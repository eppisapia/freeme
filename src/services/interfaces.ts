export interface FreemeUser {
    movil: string;
    nif_nie: string;
    email: string;
    nombre: string;
}

export interface User {
    name: string;
    address: string
    postalcode: string;
    irpf: string;
}
export interface Balance {
    income: number,
    expense: number
}
export interface dataMySelf {
    FreemeUser: FreemeUser;
    User: User;
    Balance: Balance;
}

export interface balanceValues {
    amount: number;
    vat: number
}

export interface balanceDetails {
    labels: string[];
}

export interface balanceSummary {
    dateShow: string;
    credit: balanceValues;
    debit: balanceValues
}
export interface dataBalance {
    summary: balanceSummary;
    detail: balanceDetails;
    income: number[];
    expense: number[];
}

