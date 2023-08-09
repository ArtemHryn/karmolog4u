import { Open_Sans, Unbounded } from "next/font/google";
import "./globals.scss";

export const open_Sans = Open_Sans({
  subsets: ["cyrillic"],
  variable: "--font-open_sans",
  weight: ["700", "600", "500", "400"],
});
export const unbounded = Unbounded({
  subsets: ["cyrillic"],
  variable: "--font-unbounded",
  weight: ["700", "600", "500", "400"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>{children}</body>
    </html>
  );
}
