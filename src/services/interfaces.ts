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

