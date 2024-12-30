import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page: number) => {
        onPageChange(page);
    };

    const pageItems = [];
    for (let i = 1; i <= totalPages; i++) {
        pageItems.push(i);
    }

    return (
        <Pagination className="my-8 w-full flex justify-center">
            <PaginationContent className="gap-2 flex flex-wrap justify-center">
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`${currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                    />
                </PaginationItem>

                {pageItems.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            className="px-2 py-1"
                            href="#"
                            isActive={currentPage === page}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {totalPages > 3 && currentPage < totalPages - 1 && (
                    <PaginationItem>
                        <PaginationEllipsis className="text-gray-500" />
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`${currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
