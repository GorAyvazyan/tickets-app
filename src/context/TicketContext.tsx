import React, { createContext, useContext, useState } from "react";

import { getCurrency } from "@/api/currency.ts";
import { currencySymbols } from "@/constants/";
import { TicketContextProps, TicketData } from "@/types";

const TicketContext = createContext<TicketContextProps | undefined>(undefined);

export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tickets, setTickets] = useState<TicketData[]>([]);
    const [currency, setCurrency] = useState<string>("RUB");
    const [rate, setRate] = useState<number>(1);

    const fetchRate = async (to: string) => {
        try {
            const { result } = await getCurrency({ to });
            setRate(result);
            setCurrency(to);
        } catch (error) {
            console.error("Failed to fetch currency rate:", error);
        }
    };

    const currencySymbol = currencySymbols[currency] || "";

    return (
        <TicketContext.Provider value={{ tickets, setTickets, currency, rate, currencySymbol, setCurrency, fetchRate }}>
            {children}
        </TicketContext.Provider>
    );
};

export const useTicketContext = () => {
    const context = useContext(TicketContext);
    if (!context) {
        throw new Error("useTicketContext must be used within a TicketProvider");
    }
    return context;
};
