import React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { stops } from "@/constants";

interface FiltersProps {
    selectedFilters: number[];
    onFilterChange: (filters: number[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedFilters, onFilterChange }) => {
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
            onFilterChange(stops.map((stop) => stop.value));
        }
    };

    const toggleOnly = (stop: number) => {
        onFilterChange(selectedFilters.includes(stop) ? [] : [stop]);
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
            {stops.map(({ value, label }) => {
                const id = `filter-stop-${value}`;
                return (
                    <div key={value} className="flex items-center space-x-2 hover:bg-sky-50 group py-3 relative">
                        <Checkbox
                            id={id}
                            checked={selectedFilters.includes(value)}
                            onCheckedChange={() => toggleFilter(value)}
                            className="ml-4 mr-1 checkbox leading-none"
                        />
                        <label htmlFor={id} className="text-sm text-gray-500 font-medium leading-none cursor-pointer">
                            {label}
                        </label>
                        <span
                            onClick={() => toggleOnly(value)}
                            className="text-xs text-sky-500 font-medium hidden group-hover:inline uppercase absolute right-4 cursor-pointer"
                        >
                            Только
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default Filters;
