import React from "react";

import { Checkbox } from "@/components/ui/checkbox";

interface FiltersProps {
    selectedFilters: number[];
    onFilterChange: (filters: number[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedFilters, onFilterChange }) => {
    const stops = [0, 1, 2, 3];
    const labels = ["Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"];

    const toggleFilter = (stop: number) => {
        if (selectedFilters.includes(stop)) {
            onFilterChange(selectedFilters.filter((s) => s !== stop));
        } else {
            onFilterChange([...selectedFilters, stop]);
        }
    };

    const toggleAll = () => {
        if (selectedFilters.length === stops.length) {
            onFilterChange([]);
        } else {
            onFilterChange(stops);
        }
    };

    const isAllSelected = selectedFilters.length === stops.length;

    return (
        <div className="filters mt-1">
            <div className="flex items-center space-x-2 hover:bg-sky-50 py-3">
                <Checkbox
                    id="filter-all"
                    className="ml-4 mr-1 checkbox"
                    checked={isAllSelected}
                    onCheckedChange={toggleAll}
                />
                <label htmlFor="filter-all" className="text-sm text-gray-500 font-medium leading-none cursor-pointer">
                    Все
                </label>
            </div>
            {stops.map((stop, index) => {
                const id = `filter-stop-${stop}`;
                return (
                    <div key={stop} className="flex items-center space-x-2 hover:bg-sky-50 group py-3 relative">
                        <Checkbox
                            id={id}
                            checked={selectedFilters.includes(stop)}
                            onCheckedChange={() => toggleFilter(stop)}
                            className="ml-4 mr-1 checkbox leading-none"
                        />
                        <label htmlFor={id} className="text-sm text-gray-500 font-medium leading-none cursor-pointer">
                            {labels[index]}
                        </label>
                        {stop === 1 && (
                            <span className="text-xs text-sky-500 font-medium hidden group-hover:inline uppercase absolute right-4 ">
                                Только
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Filters;
