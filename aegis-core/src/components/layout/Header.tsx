"use client";

import { Bell } from "lucide-react";

export function Header() {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
            <div>
                <h1 className="text-lg font-semibold">Disaster Response Network</h1>
            </div>

            <div className="flex items-center space-x-4">
                <button className="rounded-full p-2 text-muted-foreground hover:bg-muted">
                    <Bell className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        JD
                    </div>
                    <div className="text-sm">
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">Connected</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
