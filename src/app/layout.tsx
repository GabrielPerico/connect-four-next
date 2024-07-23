import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connect Four",
  description:
    "A simple Connect Four game built with Next.js, TypeScript, and Tailwind CSS.",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={twMerge(
          spaceGrotesk.className,
          "h-svh w-svw overflow-hidden",
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
