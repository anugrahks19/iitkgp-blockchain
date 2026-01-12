"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

export function ExplainerModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Show on first load
        const hasSeen = localStorage.getItem("aegis_intro_seen");
        if (!hasSeen) {
            setOpen(true);
        }
    }, []);

    const handleStart = () => {
        setOpen(false);
        localStorage.setItem("aegis_intro_seen", "true");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md border-red-500/50 bg-black/90">
                <DialogHeader>
                    <DialogTitle className="flex items-center text-red-500">
                        <AlertTriangle className="mr-2 h-5 w-5" />
                        EMERGENCY ALERT: REGION X
                    </DialogTitle>
                    <DialogDescription className="text-gray-300">
                        <strong>Scenario:</strong> 72 hours after Typhoon "Klara". <br />
                        Infrastructure is damaged. Banks are closed. <br /><br />
                        <strong>Your Mission:</strong> Deploy targeted aid using the Aegis Protocol. Ensure funds are used ONLY for Food and Medical supplies.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col items-center justify-center py-4 space-y-4">
                    <div className="text-sm text-center space-y-2">
                        <p>💰 <span className="text-white font-bold">$1M USDC</span> Deployed by UN DAO</p>
                        <p>🕒 Time Critical: Immediate Distribution</p>
                    </div>
                    <div className="p-2 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-500 text-center max-w-[90%]">
                        ⚠️ <strong>MVP DISCLAIMER</strong>: System running on Simulated Network (<strong>Alpha</strong>).
                        Real-time blockchain integration scheduled for v2.0 release.
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <Button type="button" variant="destructive" className="w-full" onClick={handleStart}>
                        Initialize Relief Protocols
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
