import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Trabajos en Isopanel | MOD Soluciones",
  description:
    "Instalación de techos de isopanel. Presupuesto claro, terminación prolija y coordinación directa. Consultá por WhatsApp.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VQV08MXH2Q"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQV08MXH2Q');
          `}

<Script>
  gtag('event', 'conversion', {
      'send_to': 'AW-17925960053/XZuOCO26t_YbEPXi4eNC',
      'value': 1.0,
      'currency': 'USD'
  });

        </Script>

        {children}
      </body>
    </html>
  );
}
