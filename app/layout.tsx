import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AccessWrapper from "@/components/AccessWrapper";

export const metadata: Metadata = {
  title: "HVAC Student Resources | Mike Kapin",
  description: "Free educational resources for HVAC Gas Technician students - G2, G3, CSA codes, and TSSA regulations",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HVAC Resources",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7931e",
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
          <footer className="bg-brand-bg-secondary border-t border-brand-border py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-brand-text-secondary mb-2">
                Created by <span className="text-brand-accent-orange font-semibold">Mike Kapin</span> | HVAC Educator
              </p>
              <p className="text-brand-text-tertiary text-sm">
                Professional educational resources for Gas Technician students | Independent educational content
              </p>
            </div>
          </footer>
        </AccessWrapper>
      </body>
    </html>
  );
}
