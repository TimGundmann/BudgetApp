export interface Budget {

    categories?: Category[];

}

export interface Category {

    name?: string;
    months?: Month[];
    income?: boolean;

}

export interface Month {

    month?: number;
    totalExpenses?: number;
    totalIncome?: number;
}
