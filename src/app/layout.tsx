import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamad El Kassem | Software Engineer",
  description: "Portfolio of Mohamad El Kassem, Computer Science graduate and full-stack developer focused on AI integration and data systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
