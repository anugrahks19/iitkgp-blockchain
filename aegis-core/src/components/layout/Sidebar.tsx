"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Shield, LayoutDashboard, Wallet, Store, Activity, ArrowLeft } from "lucide-react";

const navigation = [
    { name: "Global Audit", href: "/dashboard", icon: Activity },
    { name: "Beneficiary Wallet", href: "/beneficiary", icon: Wallet },
    { name: "Vendor POS", href: "/vendor", icon: Store },
    { name: "Admin Console", href: "/admin", icon: Shield },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col justify-between border-r bg-card px-4 py-6">
            <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-2 px-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-2xl font-bold tracking-tight text-primary">Aegis</span>
                </div>

                <nav className="flex flex-col space-y-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center space-x-3 rounded-lg px-2 py-2.5 transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="text-sm font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="space-y-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rounded-lg px-2 py-2.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors border border-dashed border-border/50 hover:border-solid"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>

                <div className="rounded-xl bg-destructive/10 p-4">
                    <h4 className="flex items-center text-sm font-semibold text-destructive">
                        <Activity className="mr-2 h-4 w-4" />
                        Live Disaster Mode
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                        Region X Typhoon Response Active.
                    </p>
                </div>

                <div className="text-[10px] text-center text-muted-foreground/50 font-mono">
                    AEGIS HACKATHON MVP v0.1 <br />
                    SIMULATED ENVIRONMENT
                </div>
            </div>
        </div>
    );
}
