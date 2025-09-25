import "@/styles/globals.css";
import NavBar from "@/components/NavBar";

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
        <NavBar />
        <div className="max-w-6xl mx-auto px-4">{children}</div>
      </body>
    </html>
  );
}
