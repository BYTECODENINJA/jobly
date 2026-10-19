import type { Metadata } from "next";
import { Mona_Sans} from "next/font/google";
import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobly",
  description: "AI-Powered Personal interview Prep App",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body
          className={`${monaSans.className} antialiased`}>
      {children}
      </body>
    </html>
  );
}
