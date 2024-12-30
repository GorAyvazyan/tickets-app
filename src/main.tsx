import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { TicketProvider } from "@/context/TicketContext";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TicketProvider>
            <App />
        </TicketProvider>
    </StrictMode>
);
