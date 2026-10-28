import "./globals.css";

export const metadata = {
  title: "Portfolio de Delphine Nicolas-Etheve",
  description: "Développeuse web passionnée par React et Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
