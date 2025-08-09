import "./main.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// React Query pakai context buat nyimpen dan kelola cache, status, refetch, dll.
// Tanpa QueryClientProvider, semua hook kayak useQuery gak bisa jalan karena gak tahu harus connect ke mana.

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
