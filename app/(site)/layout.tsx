import type { Metadata } from "next";
import "../globals.css";
import { Footer, Header } from "../../components";
import ButtonGradient from "../../components/svg/ButtonGradient";


export const metadata: Metadata = {
  title: {
    template: "%s | Brainwave",
    default: "Brainwave",
  },
  description: "The official Brainwave landing page.",
  metadataBase: new URL("https://brainwave-sanity-nextjs.vercel.app"),
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
          <Header stickyHeader />
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
