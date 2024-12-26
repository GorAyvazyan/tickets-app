import React from "react";

import Ticket from "@/components/Ticket";
import { TicketsListData } from "@/types";

const TicketsList: React.FC<TicketsListData> = ({ tickets }) => {
    if (tickets.length === 0) {
        return (
            <div className="no-data text-center text-gray-500 p-6">
                <p className="text-lg font-semibold">Ни один билет не соответствует выбранным фильтрам.</p>
                <p className="text-sm">Пожалуйста, измените свои фильтры, чтобы увидеть доступные билеты.</p>
            </div>
        );
    }

    return (
        <div className="ticket-list space-y-4 min-h-[435px]">
            {tickets.map((ticket, index) => (
                <Ticket key={index} {...ticket} />
            ))}
        </div>
    );
};

export default TicketsList;
