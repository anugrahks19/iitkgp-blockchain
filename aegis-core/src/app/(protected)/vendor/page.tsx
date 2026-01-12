"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSimulation } from "@/lib/SimulationContext";

export default function VendorPage() {
    const { vendorPendingBalance, releaseFunds } = useSimulation();
    const [analyzing, setAnalyzing] = useState(false);
    const [analyzed, setAnalyzed] = useState(false);

    const handleUpload = () => {
        setAnalyzing(true);
        // Simulate AI Delay
        setTimeout(() => {
            setAnalyzing(false);
            setAnalyzed(true);
            releaseFunds(12.50);
        }, 3000);
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Vendor Terminal</h2>
                    <p className="text-muted-foreground">Mom & Pop Store (Verified Level 2)</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium">Pending Balance</p>
                    <p className="text-2xl font-bold">{vendorPendingBalance.toLocaleString()} <span className="text-sm">USDC</span></p>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Accept Payment</CardTitle>
                        <CardDescription>Generate a QR code for beneficiary to scan.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                        <div className="h-48 w-48 bg-white p-2 rounded-lg">
                            <div className="h-full w-full border-4 border-black border-dashed flex items-center justify-center">
                                <span className="text-black font-bold rotate-45 select-none text-2xl">QR CODE</span>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Session ID: #8822-FOOD</p>
                    </CardContent>
                </Card>

                <Card className="border-primary/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 bg-primary text-primary-foreground text-xs font-bold rounded-bl-lg">
                        AI AGENT ACTIVE
                    </div>
                    <CardHeader>
                        <CardTitle>Cash Out / Audit</CardTitle>
                        <CardDescription>Upload receipt photo to release funds.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!analyzed ? (
                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl h-48 flex flex-col items-center justify-center space-y-4 hover:bg-muted/50 transition-colors cursor-pointer" onClick={handleUpload}>
                                {analyzing ? (
                                    <>
                                        <Loader2 className="h-10 w-10 animate-spin text-primary" />
                                        <div className="space-y-1 text-center">
                                            <p className="font-medium text-primary">AI Analyzing receipt...</p>
                                            <p className="text-xs text-muted-foreground">Checking: "Rice", "Flour", "Oil"</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <Upload className="h-10 w-10 text-muted-foreground" />
                                        <div className="text-center">
                                            <p className="font-medium">Click to Upload Receipt</p>
                                            <p className="text-xs text-muted-foreground">Supported: JPG, PNG</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 space-y-3"
                            >
                                <div className="flex items-center space-x-2 text-green-500">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="font-bold">Verification Successful</span>
                                </div>
                                <div className="text-sm space-y-1">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Items Detected:</span>
                                        <span>Rice (5kg), Oil (1L)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Confidence:</span>
                                        <span>99.8%</span>
                                    </div>
                                    <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                                        <span>Funds Released:</span>
                                        <span>$12.50 USDC</span>
                                    </div>
                                </div>
                                <Button className="w-full" variant="outline" onClick={() => setAnalyzed(false)}>
                                    Process Next
                                </Button>
                            </motion.div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
