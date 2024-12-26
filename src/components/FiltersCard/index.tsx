import React from "react";

import Filters from "@/components/FIlters";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FiltersCardProps = {
    filters: number[];
    onFilterChange: (filters: number[]) => void;
};

const FiltersCard: React.FC<FiltersCardProps> = ({ filters, onFilterChange }) => {
    return (
        <Card className="self-start shadow-lg w-full">
            <CardHeader className="p-4">
                <CardTitle className="text-xs text-slate-600 uppercase mb-2 font-semibold">Валюта</CardTitle>
                <div className="flex items-center border rounded">
                    <Button className="bg-sky-600 hover:bg-sky-600 w-full rounded text-white font-medium">RUB</Button>
                    <Button className="bg-transparent w-full rounded-none text-sky-500 hover:bg-sky-100 selected:text-white font-medium border-r hover:border-r-blue-300">
                        USD
                    </Button>
                    <Button className="bg-transparent w-full rounded-none text-sky-500 hover:bg-sky-100 selected:text-white font-medium">
                        EUR
                    </Button>
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
