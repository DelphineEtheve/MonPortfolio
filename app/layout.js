import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Portfolio de Delphine Nicolas-Etheve",
  description: "Développeuse web passionnée par React et Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
