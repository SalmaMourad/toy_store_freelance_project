import "./globals.css";

export const metadata = {
  title: "Toy Store",
  description: "Kids Toys Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}