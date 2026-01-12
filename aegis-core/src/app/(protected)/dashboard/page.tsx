"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Activity, Droplets, Utensils, HeartPulse, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useSimulation } from "@/lib/SimulationContext";
import { ExplainerModal } from "@/components/ExplainerModal";

export default function Dashboard() {
    const { transactions, stats } = useSimulation();

    return (
        <div className="space-y-8 p-2">
            <ExplainerModal />

            {/* HUD Header */}
            <div className="flex items-end justify-between border-b border-primary/20 pb-4">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                        <Zap className="text-yellow-400 h-6 w-6" />
                        COMMAND CENTER
                    </h2>
                    <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mt-1">
                        Live Feed • Secure Link • Latency: 12ms
                    </p>
                </div>
                <div className="flex gap-2 text-xs font-mono text-primary/70">
                    <span className="animate-pulse">● LIVE</span>
                    <span>|</span>
                    <span>BLK: 18,244,102</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="glass-panel border-l-4 border-l-blue-500 rounded-none overflow-hidden relative group">
                        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                            <CardTitle className="text-sm font-medium text-blue-400">Total Aid Deployed</CardTitle>
                            <Activity className="h-4 w-4 text-blue-500" />
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="text-3xl font-bold text-white text-glow">${stats.totalAid.toLocaleString()}</div>
                            <p className="text-xs text-blue-300/60 mt-1 font-mono">+12% this hour</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="glass-panel border-l-4 border-l-orange-500 rounded-none overflow-hidden relative group">
                        <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors" />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                            <CardTitle className="text-sm font-medium text-orange-400">Food Credits</CardTitle>
                            <Utensils className="h-4 w-4 text-orange-500" />
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="text-3xl font-bold text-white text-glow">{stats.foodRedeemed.toLocaleString()}</div>
                            <p className="text-xs text-orange-300/60 mt-1 font-mono">Redeemed Today</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="glass-panel border-l-4 border-l-red-500 rounded-none overflow-hidden relative group">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors" />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                            <CardTitle className="text-sm font-medium text-red-400">Medical Supplies</CardTitle>
                            <HeartPulse className="h-4 w-4 text-red-500" />
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="text-3xl font-bold text-white text-glow">{stats.medicalRedeemed.toLocaleString()}</div>
                            <p className="text-xs text-red-300/60 mt-1 font-mono">Units Delivered</p>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="glass-panel border-l-4 border-l-cyan-500 rounded-none overflow-hidden relative group">
                        <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors" />
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                            <CardTitle className="text-sm font-medium text-cyan-400">Water/Shelter</CardTitle>
                            <Droplets className="h-4 w-4 text-cyan-500" />
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <div className="text-3xl font-bold text-white text-glow">8,900</div>
                            <p className="text-xs text-cyan-300/60 mt-1 font-mono">Stable Deployment</p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7 h-[500px]">
                {/* Heatmap / Map */}
                <Card className="col-span-4 glass-panel border-none relative overflow-hidden flex flex-col">
                    <CardHeader className="relative z-10 bg-black/20 backdrop-blur-sm">
                        <CardTitle className="flex justify-between items-center text-primary">
                            <span>GEOSPATIAL IMPACT • REGION X</span>
                            <span className="text-xs font-mono px-2 py-1 bg-primary/20 rounded text-white">LIVE</span>
                        </CardTitle>
                        <CardDescription className="text-xs font-mono">Real-time ZK-Proof verification stream</CardDescription>
                    </CardHeader>
                    <CardContent className="relative flex-1 p-0">
                        {/* Map Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

                        {/* Radar Scanner */}
                        <motion.div
                            className="absolute inset-0 border-b-2 border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.5)] scanner-line z-0"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        />

                        <div className="h-full w-full flex items-center justify-center relative z-10">
                            {/* Ping Animations */}
                            <div className="absolute top-1/4 left-1/3">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                                </span>
                                <span className="text-[10px] text-orange-400 absolute ml-4 -mt-2 font-mono bg-black/50 px-1 rounded">FOOD_DROP_01</span>
                            </div>

                            <div className="absolute bottom-1/3 right-1/4">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <span className="text-[10px] text-red-400 absolute ml-4 -mt-2 font-mono bg-black/50 px-1 rounded">MED_CLINIC_A</span>
                            </div>

                            <div className="text-center opacity-30 pointer-events-none">
                                <p className="text-6xl font-black text-primary/20 tracking-tighter">AEGIS</p>
                                <p className="text-sm font-mono tracking-[1em]">SYSTEMS</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Transaction Stream */}
                <Card className="col-span-3 glass-panel border-t-4 border-t-purple-500/50 relative overflow-hidden flex flex-col">
                    <CardHeader className="relative z-10 bg-black/20 backdrop-blur-sm">
                        <CardTitle className="text-purple-400 text-sm font-mono uppercase">Transaction Stream</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-hidden p-0">
                        <div className="space-y-0 divide-y divide-white/5">
                            {transactions.slice(0, 6).map((tx, i) => (
                                <motion.div
                                    key={tx.id || i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 hover:bg-white/5 transition-colors flex items-center justify-between group cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`h-2 w-2 rounded-full ${tx.type === 'food' ? 'bg-orange-500' : 'bg-red-500'} shadow-[0_0_8px_currentColor]`} />
                                        <div className="space-y-0.5">
                                            <p className="text-xs font-mono text-white/70 group-hover:text-white">{tx.from} <span className="text-white/30">→</span> {tx.to}</p>
                                            <p className="text-[10px] text-white/40 uppercase tracking-wider">{tx.id}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">{tx.amount}</p>
                                        <p className={`text-[10px] ${tx.status.includes('Blocked') ? 'text-red-400' : 'text-green-400'}`}>{tx.status}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Fade out bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
