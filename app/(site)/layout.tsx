import type { Metadata } from "next";
import "../globals.css";
import { Footer, Header } from "../../components";
import ButtonGradient from "../../components/svg/ButtonGradient";


export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Header />
          <main className="flex flex-col pt-[4.75rem] lg:pt-[5.25rem] overflow-x-hidden">
            {children}
          </main>
          <Footer />

          <ButtonGradient />
        </div>
      </body>
    </html>
  );
}
