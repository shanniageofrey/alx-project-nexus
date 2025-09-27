import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";

export const metadata = {
  title: "Movieflix App",
  description: "Search and get movie recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="text-white min-h-screen">
        <AuthProvider>
          <NavBar />
           <FavoritesProvider>{children}</FavoritesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
