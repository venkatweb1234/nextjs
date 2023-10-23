import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Venkat",
  description: "Web development tutorials",
  keywords: "web dev web design, javascript",
};

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
