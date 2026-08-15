import "./globals.css";
import { Poppins } from "next/font/google";
import {
 FaWhatsapp,
 FaFacebook,
 FaInstagram,
 FaSearch,
 FaEdit,
 FaTrash,
 FaSignOutAlt,
} from "react-icons/fa";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata = {
  title: "Toy Store",
  description: "Kids Toys Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={poppins.className}> */}
      <body
  className={`${poppins.className} bg-white text-gray-700 antialiased`}
>
        {children}</body>
    </html>
  );
}