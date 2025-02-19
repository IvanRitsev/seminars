import type { Metadata } from "next";
import "@/styles/global.scss";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Семинары",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
