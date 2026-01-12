"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Lock, Globe, CheckCircle2, XCircle, BarChart3, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Particles from "@/components/ui/Particles";

export default function LandingPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-primary/30">
      {/* Header */}
      <header className="px-6 h-16 flex items-center justify-between border-b border-white/10 backdrop-blur-md fixed top-0 w-full z-50 bg-black/50">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-white font-outfit">Aegis Protocol</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Console Access
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden pt-20">
          <Particles />
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              System Online • Global Reliance Network
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-tight font-outfit">
              AID AT THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 glow-text">SPEED OF LIGHT</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A decentralized, zero-knowledge disaster relief network. <br />
              <span className="text-white">Eliminate fraud. Protect privacy. Instant delivery.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-10 text-xl bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all hover:scale-105">
                  Launch Console <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="ghost" size="lg" className="h-14 px-10 text-xl text-muted-foreground hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Parallax Features Section */}
        <section id="features" ref={targetRef} className="py-32 relative overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 bg-primary/5 -z-10 skew-y-3 origin-top-left scale-110" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Aegis?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Traditional aid is slow, opaque, and leaked. We fixed it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Instant Settlement", desc: "Funds reach beneficiaries in seconds via Layer 2 scaling. No banking delays." },
                { icon: Lock, title: "ZK-Privacy", desc: "Verify identity and need without exposing sensitive personal data publicly." },
                { icon: Globe, title: "Universal Access", desc: "Works on feature phones via SMS/QR. No smartphone or internet required for end-users." }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-primary/50 transition-all hover:-translate-y-2"
                >
                  <div className="h-14 w-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-32 bg-black/40 relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white">The Paradigm Shift</h2>
            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden bg-black/50 backdrop-blur-sm">
              <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5 text-lg font-bold text-white">
                <div className="col-span-1">Feature</div>
                <div className="col-span-1 text-center text-muted-foreground">Traditional NGO</div>
                <div className="col-span-1 text-center text-primary">Aegis Protocol</div>
              </div>
              {[
                { feature: "Time to Delivery", old: "3-7 Days", new: "< 10 Seconds" },
                { feature: "Overhead Cost", old: "15-30%", new: "< 0.1%" },
                { feature: "Transparency", old: "Audited Yearly", new: "Real-time Public Ledger" },
                { feature: "Fraud Prevention", old: "Manual Checks", new: "Cryptographic Proofs" },
                { feature: "Access Requirement", old: "Bank Account + ID", new: "Any Phone Number" }
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
                  <div className="col-span-1 font-medium text-white">{row.feature}</div>
                  <div className="col-span-1 text-center text-muted-foreground flex items-center justify-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500/50" /> {row.old}
                  </div>
                  <div className="col-span-1 text-center text-white flex items-center justify-center gap-2 font-bold shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> {row.new}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Impact Stats */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-30"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">REAL-TIME <br />IMPACT TRACKING</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Our dashboard provides granular visibility into every dollar deployed. Donors can track their impact from wallet to aid delivery.
                </p>
                <ul className="space-y-4">
                  {[
                    "Immutable Transaction History",
                    "Category-Locked Spending (Food/Meds)",
                    "Geospatial Heatmaps of Distribution"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-white text-lg">
                      <div className="h-2 w-2 bg-primary rounded-full mr-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mock Chart Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.4 }}
              >
                <Card className="bg-black/80 border-primary/20 backdrop-blur-xl shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex justify-between text-white">
                      <span>Fund Utilization</span>
                      <BarChart3 className="text-primary" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 w-full flex items-end justify-between space-x-2 pb-4 border-b border-white/10">
                      {[35, 60, 45, 70, 50, 80, 65, 90].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="w-full bg-primary/20 rounded-t hover:bg-primary/50 transition-colors relative group"
                        >
                          <div className="absolute bottom-0 w-full bg-primary/50 h-1"></div>
                          {/* Tooltipish */}
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-mono text-primary transition-opacity">
                            ${h}k
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground pt-4 font-mono">
                      <span>DAY 01</span>
                      <span>DAY 07</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-white">Aegis Protocol</span>
        </div>
        <p className="text-muted-foreground text-sm">Empowering Communities in Crisis.</p>
        <p className="text-muted-foreground/40 text-xs mt-8">© 2026 IIT KGP Blockchain Hackathon. All rights reserved.</p>
      </footer>
    </div>
  );
}
