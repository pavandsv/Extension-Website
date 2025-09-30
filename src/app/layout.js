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

        {/* Inline Zoho setup script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$zoho = window.$zoho || {};
              $zoho.salesiq = $zoho.salesiq || { ready: function() {} };
            `,
          }}
        />

        {/* Zoho widget script */}
        <script
          id="zsiqscript"
          src="https://salesiq.zohopublic.com/widget?wc=siqd5554e2b4cb32464c280697bfa50a51cc07229c8920b4b9dc4247500c1733a43"
          defer
        ></script>

        
      </body>
    </html>
  );
}
