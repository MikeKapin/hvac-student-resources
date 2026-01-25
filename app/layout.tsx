import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AccessWrapper from "@/components/AccessWrapper";

export const metadata: Metadata = {
  title: "HVAC Student Resources | Mike Kapin",
  description: "Free educational resources for HVAC Gas Technician students - G2, G3, CSA codes, and TSSA regulations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AccessWrapper>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-claude-bg-secondary border-t border-claude-border py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-claude-text-secondary mb-2">
                Created by <span className="text-claude-accent-orange font-semibold">Mike Kapin</span> | HVAC Educator
              </p>
              <p className="text-claude-text-tertiary text-sm">
                Free educational resources | Not affiliated with Fanshawe College or any business entity
              </p>
            </div>
          </footer>
        </AccessWrapper>
      </body>
    </html>
  );
}
