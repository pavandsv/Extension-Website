
import "./globals.css";
import { Raleway } from "next/font/google";
import ConditionalLayout from "./ConditionalLayout.js";

const raleway = Raleway({
  subsets: ["latin"],
  weight: [
    "100", "200", "300", "400", "500",
    "600", "700", "800", "900",
  ],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "DSV Extensions",
  description: "A Next.js project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="flex flex-col min-h-screen">
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
