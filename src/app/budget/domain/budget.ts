export interface Budget {

    categories?: Category[];

}

export interface Category {

    name?: string;
    months?: Month[];

}

export interface Month {

    month?: number;
    totalExpenses?: number;
}
