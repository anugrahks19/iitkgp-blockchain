"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, AlertTriangle, Check, X, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AdminPage() {
    const [pendingVendors, setPendingVendors] = useState([
        { id: 1, name: "City Center Pharmacy", type: "Medical", address: "0x71C...9A21", status: "Pending" },
        { id: 2, name: "Fresh Mart Supplies", type: "Food", address: "0xB21...881A", status: "Pending" },
    ]);

    const handleApprove = (id: number, name: string) => {
        setPendingVendors(prev => prev.filter(v => v.id !== id));
        toast.success("Organization Verified", {
            description: `${name} has been added to the Registry.`
        });
    };

    const handleReject = (id: number) => {
        setPendingVendors(prev => prev.filter(v => v.id !== id));
        toast.info("Organization Rejected");
    };

    const [networkStatus, setNetworkStatus] = useState("Active");

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Admin Console</h2>
                    <p className="text-muted-foreground">Network Governance & Org Registry</p>
                </div>
                <div className="flex items-center space-x-2 bg-red-500/10 text-red-500 px-4 py-2 rounded-lg border border-red-500/20">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-semibold">Emergency Mode: ENABLED</span>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* System Health */}
                <Card className="col-span-1 border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Shield className="mr-2 h-5 w-5 text-primary" />
                            System Status
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Network</span>
                            <span className="flex items-center text-green-500"><span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span> {networkStatus}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Contracts</span>
                            <span className="text-green-500">Immutable</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Oracles</span>
                            <span className="text-green-500">Online (3/3)</span>
                        </div>
                        <Button variant="destructive" className="w-full mt-4" onClick={() => {
                            const newStatus = networkStatus === "Active" ? "Paused" : "Active";
                            setNetworkStatus(newStatus);
                            toast.warning(`Network ${newStatus}`, { description: "Emergency pause triggered." });
                        }}>
                            <Lock className="mr-2 h-4 w-4" />
                            {networkStatus === "Active" ? "Pause Network" : "Resume Network"}
                        </Button>
                    </CardContent>
                </Card>

                {/* Verification Queue */}
                <Card className="col-span-1 lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Users className="mr-2 h-5 w-5 text-orange-500" />
                            Verification Queue
                        </CardTitle>
                        <CardDescription>2 New Organizations requesting access</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {pendingVendors.length === 0 ? (
                                <div className="text-center py-8 text-muted-foreground">
                                    All queues cleared.
                                </div>
                            ) : (
                                pendingVendors.map((vendor) => (
                                    <div key={vendor.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border">
                                        <div>
                                            <p className="font-semibold">{vendor.name}</p>
                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <span>{vendor.type}</span>
                                                <span>•</span>
                                                <span className="font-mono text-xs">{vendor.address}</span>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-950/20" onClick={() => handleReject(vendor.id)}>
                                                <X className="h-4 w-4" />
                                            </Button>
                                            <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleApprove(vendor.id, vendor.name)}>
                                                <Check className="h-4 w-4 mr-1" /> Approve
                                            </Button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Governance Proposals</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                                <p className="font-semibold text-sm">PIP-12: Region X Extension</p>
                                <div className="w-full bg-secondary h-2 mt-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[85%]"></div>
                                </div>
                                <p className="text-xs text-right mt-1 text-primary">85% For</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
