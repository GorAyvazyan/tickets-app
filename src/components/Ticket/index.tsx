import React from "react";

import Airlines from "@/assets/images/airlines.png";
import PlaneSvg from "@/assets/images/plane.svg";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { TicketData } from "@/types";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";

const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

const formatDate = (date: string) => {
    try {
        const parsedDate = parse(date, "dd.MM.yy", new Date());
        return format(parsedDate, "dd MMMM yyyy, EEE", { locale: ru });
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Invalid date format:", err.message);
        } else {
            console.error("An unexpected error occurred while parsing the date");
        }
        return "Invalid Date";
    }
};

const buyTicket = () => alert("Билет был успешно куплен");

const Ticket: React.FC<TicketData> = ({
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price,
}) => {
    return (
        <div className="ticket">
            <Card className="shadow-lg border-0">
                <CardContent className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-0 ">
                    <div className="flex flex-col items-center w-full lg:w-1/4 mb-4 lg:mb-0 p-4 sm:p-6 lg:border lg:border-y-0 lg:border-l-0 border-r-gray-200">
                        <img src={Airlines} alt={`${carrier} logo`} width={100} height={100} className="mb-4" />
                        <Button
                            onClick={buyTicket}
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded text-center"
                        >
                            {`Купить за ${formatPrice(price)} ₽`}
                        </Button>
                    </div>
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 lg:px-4 ">
                        <div className="text-center">
                            <p className="text-3xl text-zinc-600 font-medium mb-1">{departure_time}</p>
                            <p className="text-sm text-zinc-600 font-semibold truncate">
                                ({origin}), {origin_name}
                            </p>
                            <p className="text-xs font-medium text-gray-400">{formatDate(departure_date)}</p>
                        </div>
                        <div className="text-center items-center justify-start flex flex-col">
                            <p className="text-xs text-gray-400 font-semibold mb-2">
                                {stops === 0 ? "БЕЗ ПЕРЕСАДОК" : `${stops} ${stops > 1 ? "ПЕРЕСАДКИ" : "ПЕРЕСАДКА"}`}
                            </p>
                            <div className="flex w-full items-center">
                                <div className="h-px bg-gray-200 w-full mr-1"></div>
                                <PlaneSvg />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl text-zinc-600 font-medium mb-1">{arrival_time}</p>
                            <p className="text-sm text-zinc-600 truncate">
                                {destination_name}, ({destination})
                            </p>
                            <p className="text-xs font-medium text-gray-400">{formatDate(arrival_date)}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Ticket;
