"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function Providers({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <>
            <SessionProvider>
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </SessionProvider>
        </>
    );
}
