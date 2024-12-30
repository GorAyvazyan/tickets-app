export const DATE_FORMAT = "dd.MM.yy";
export const PARSED_DATE_FORMAT = "dd MMMM yyyy, EEE";
export const TICKETS_PER_PAGE = 3;

export enum CurrenciesName {
    "RUB" = "RUB",
    "USD" = "USD",
    "EUR" = "EUR",
}

export const currencySymbols: Record<string, string> = {
    [CurrenciesName.RUB]: "₽",
    [CurrenciesName.USD]: "$",
    [CurrenciesName.EUR]: "€",
};

export const stops = [
    { value: 0, label: "Без пересадок" },
    { value: 1, label: "1 пересадка" },
    { value: 2, label: "2 пересадки" },
    { value: 3, label: "3 пересадки" },
];
