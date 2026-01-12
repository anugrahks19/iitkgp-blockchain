"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, QrCode, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useSimulation } from "@/lib/SimulationContext";

export default function BeneficiaryPage() {
    const { performPayment } = useSimulation();
    const [scanning, setScanning] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleScan = () => {
        setScanning(true);
        setTimeout(() => {
            setScanning(false);
            // Perform simulated payment
            performPayment(25, "food");
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        }, 2500);
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">My Wallet</h2>
                <Button variant="outline"><Wallet className="mr-2 h-4 w-4" /> 0x...8a2F</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                    <CardHeader>
                        <CardTitle className="text-blue-500">Food Credits</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">250 <span className="text-sm font-normal text-muted-foreground">CRDO</span></div>
                        <p className="text-sm mt-2 text-muted-foreground">Valid at: 12 Local Grocery Stores</p>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
                    <CardHeader>
                        <CardTitle className="text-red-500">Medical Aid</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">50 <span className="text-sm font-normal text-muted-foreground">MEDX</span></div>
                        <p className="text-sm mt-2 text-muted-foreground">Valid at: City Pharmacy</p>
                    </CardContent>
                </Card>
            </div>

            <Card className="overflow-hidden">
                <CardHeader>
                    <CardTitle>Pay Vendor</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[300px] border-t bg-black/20">
                    <AnimatePresence mode="wait">
                        {success ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center space-y-4"
                            >
                                <div className="h-20 w-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-500">Payment Successful</h3>
                                <p className="text-muted-foreground">- 25 Food Credits sent to Mom & Pop Store</p>
                            </motion.div>
                        ) : scanning ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="relative h-64 w-64 border-2 border-primary/50 rounded-lg overflow-hidden"
                            >
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-xs text-primary/70">
                                    Scanning QR...
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center"
                            >
                                <Button size="lg" className="h-20 w-48 text-lg" onClick={handleScan}>
                                    <QrCode className="mr-2 h-8 w-8" />
                                    Scan QR
                                </Button>
                                <p className="mt-4 text-sm text-muted-foreground">Scan the vendor's code to pay instantly.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    );
}
