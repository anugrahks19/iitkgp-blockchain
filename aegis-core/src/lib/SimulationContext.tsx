"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

type Transaction = {
    id: string;
    from: string;
    to: string;
    amount: string;
    time: string;
    status: string;
    type: "food" | "medical";
};

type Stats = {
    totalAid: number;
    foodRedeemed: number;
    medicalRedeemed: number;
};

interface SimulationContextType {
    transactions: Transaction[];
    stats: Stats;
    vendorPendingBalance: number;
    performPayment: (amount: number, type: "food" | "medical") => void;
    releaseFunds: (amount: number) => void;
}

const SimulationContext = createContext<SimulationContextType | undefined>(undefined);

export function SimulationProvider({ children }: { children: React.ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([
        { id: "tx-1", from: "UN Aid DAO", to: "Region X Distributor", amount: "50,000 USDC", time: "2m ago", status: "Executed", type: "medical" },
    ]);
    const [stats, setStats] = useState<Stats>({
        totalAid: 1240500,
        foodRedeemed: 45200,
        medicalRedeemed: 12800,
    });
    const [vendorPendingBalance, setVendorPendingBalance] = useState(1450);

    const performPayment = (amount: number, type: "food" | "medical") => {
        // Simulate Network Delay
        setTimeout(() => {
            const newTx: Transaction = {
                id: `tx-${Math.random().toString(36).substr(2, 9)}`,
                from: "Beneficiary Wallet",
                to: "Local Vendor",
                amount: `${amount} ${type === "food" ? "Food Credits" : "Medical"}`,
                time: "Just now",
                status: "Verified",
                type: type,
            };

            setTransactions(prev => [newTx, ...prev]);
            setVendorPendingBalance(prev => prev + (amount * 0.5)); // Assume 1 Credit = 0.5 USDC for demo logic? Or 1:1. Let's say 1 Credit = $1 mock.
            // Actually, let's keep it simple.

            setStats(prev => ({
                ...prev,
                foodRedeemed: type === "food" ? prev.foodRedeemed + amount : prev.foodRedeemed,
                medicalRedeemed: type === "medical" ? prev.medicalRedeemed + amount : prev.medicalRedeemed,
            }));

            toast.success("Blockchain Transaction Confirmed", {
                description: `Sent ${amount} ${type} credits to Vendor.`,
            });
        }, 1500);
    };

    const releaseFunds = (amount: number) => {
        setVendorPendingBalance(prev => Math.max(0, prev - amount));
        toast.success("Funds Released", {
            description: `${amount} USDC transferred to Bank Account via Stablecoin Rails.`,
        });
    };

    return (
        <SimulationContext.Provider value={{ transactions, stats, vendorPendingBalance, performPayment, releaseFunds }}>
            {children}
        </SimulationContext.Provider>
    );
}

export const useSimulation = () => {
    const context = useContext(SimulationContext);
    if (!context) throw new Error("useSimulation must be used within SimulationProvider");
    return context;
};
