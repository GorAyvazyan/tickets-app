import { useEffect, useState } from "react";

import { getTickets } from "@/api";
import MainLogo from "@/assets/images/airplane.png";
import FiltersCard from "@/components/FiltersCard";
import PaginationComponent from "@/components/Pagination";
import TicketsList from "@/components/TicketsList";
import { TicketData } from "@/types";

const Home = () => {
    const [filters, setFilters] = useState<number[]>([]);
    const [allTickets, setAllTickets] = useState<TicketData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const ticketsPerPage = 3;

    useEffect(() => {
        async function fetchTickets() {
            try {
                const response = await getTickets();
                const filteredTickets = response.tickets.filter((ticket) =>
                    filters.length > 0 ? filters.includes(ticket.stops) : true
                );
                const sortedTickets = filteredTickets.sort((a, b) => a.price - b.price);

                setAllTickets(sortedTickets);
            } catch (err) {
                if (err instanceof Error) {
                    console.error("Error fetching tickets:", err.message);
                } else {
                    console.error("Unknown error fetching tickets");
                }
            }
        }

        fetchTickets();
    }, [filters]);

    const totalTickets = allTickets.length;

    const totalPages = Math.ceil(totalTickets / ticketsPerPage);
    const currentTickets = allTickets.slice((currentPage - 1) * ticketsPerPage, currentPage * ticketsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (selectedFilters: number[]) => {
        setFilters(selectedFilters);
        setCurrentPage(1);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-center mt-12 px-4">
            <div className="pb-12">
                <img src={MainLogo} alt="" width={60} height={60} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 gap-y-4 md:gap-4 text-left w-full max-w-screen-lg mx-auto">
                <FiltersCard filters={filters} onFilterChange={handleFilterChange} />
                <div className="col-span-3 w-full">
                    <TicketsList tickets={currentTickets} />
                    {totalTickets > ticketsPerPage && (
                        <PaginationComponent
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
