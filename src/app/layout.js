import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "syntax",
  description: "untuk tugas pbp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-slate-900 text-white`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
