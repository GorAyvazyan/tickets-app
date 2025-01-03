import { useEffect, useState } from "react";

import { getTickets } from "@/api";
import MainLogo from "@/assets/images/airplane.png";
import FiltersCard from "@/components/FiltersCard";
import PaginationComponent from "@/components/Pagination";
import TicketsList from "@/components/TicketsList";
import { TICKETS_PER_PAGE } from "@/constants";
import { useTicketContext } from "@/context/TicketContext";

const Home = () => {
    const { tickets, setTickets, rate } = useTicketContext();
    const [filters, setFilters] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await getTickets();
                const filteredTickets = response.tickets.filter((ticket) =>
                    filters.length > 0 ? filters.includes(ticket.stops) : true
                );
                const sortedTickets = filteredTickets.sort((a, b) => a.price - b.price);
                setTickets(sortedTickets);
            } catch (error) {
                console.error("Error fetching tickets:", error);
            }
        };

        fetchTickets();
    }, [filters, setTickets]);

    const totalTickets = tickets.length;
    const totalPages = Math.ceil(totalTickets / TICKETS_PER_PAGE);
    const currentTickets = tickets
        .slice((currentPage - 1) * TICKETS_PER_PAGE, currentPage * TICKETS_PER_PAGE)
        .map((ticket) => ({ ...ticket, price: ticket.price * rate }));

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
                    {totalTickets > TICKETS_PER_PAGE && (
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
