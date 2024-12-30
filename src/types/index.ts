export type TicketData = {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
};

export type TicketsListData = {
    tickets: TicketData[];
};

export type TicketContextProps = {
    tickets: TicketData[];
    setTickets: (tickets: TicketData[]) => void;
    currency: string;
    rate: number;
    currencySymbol: string;
    setCurrency: (currency: string) => void;
    fetchRate: (currency: string) => Promise<void>;
};
