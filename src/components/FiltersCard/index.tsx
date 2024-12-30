import React from "react";

import Filters from "@/components/FIlters";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CurrenciesName } from "@/constants";
import { useTicketContext } from "@/context/TicketContext.tsx";

type FiltersCardProps = {
    filters: number[];
    onFilterChange: (filters: number[]) => void;
};

const FiltersCard: React.FC<FiltersCardProps> = ({ filters, onFilterChange }) => {
    const { fetchRate, currency } = useTicketContext();

    const handleCurrencyChange = (newCurrency: string) => {
        if (currency !== newCurrency) {
            fetchRate(newCurrency);
        }
    };
    return (
        <Card className="self-start shadow-lg w-full">
            <CardHeader className="p-4">
                <CardTitle className="text-xs text-slate-600 uppercase mb-2 font-semibold">Валюта</CardTitle>
                <div className="flex items-center border rounded">
                    {Object.values(CurrenciesName).map((curr) => (
                        <Button
                            key={curr}
                            className={`w-full rounded text-sky-500 bg-transparent font-medium ${
                                currency === curr ? "bg-sky-600 text-white" : "hover:bg-sky-100"
                            }`}
                            onClick={() => handleCurrencyChange(curr)}
                        >
                            {curr}
                        </Button>
                    ))}
                </div>
            </CardHeader>
            <CardContent className="px-0 pb-4 pt-2">
                <p className="text-xs text-slate-600 uppercase font-semibold pl-4">Количество Пересадок</p>
                <Filters selectedFilters={filters} onFilterChange={onFilterChange} />
            </CardContent>
        </Card>
    );
};

export default FiltersCard;
