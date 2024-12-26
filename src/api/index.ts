import { TicketData } from "@/types";

export async function getTickets(): Promise<{ tickets: TicketData[] }> {
    const options: RequestInit = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = await fetch("tickets.json", options);

    if (!res.ok) {
        throw new Error(`Failed to fetch tickets: ${res.statusText}`);
    }

    return res.json();
}
