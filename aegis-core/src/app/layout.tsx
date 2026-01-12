import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Toaster } from "@/components/ui/sonner";
import { SimulationProvider } from "@/lib/SimulationContext";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Aegis | Disaster Relief Network",
  description: "Transparent, Rapid, Targeted Aid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, outfit.variable, "bg-background antialiased")}>
        <SimulationProvider>
          {children}
          <Toaster />
        </SimulationProvider>
      </body>
    </html>
  );
}
