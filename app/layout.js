import { Inria_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const iniriaSans = Inria_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "First Time Mortgages",
  description: "First Time Mortgages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iniriaSans.className + " max-w-screen-xl m-auto"}>
        <nav className=" justify-between items-center py-3 px-5 lg:flex">
          <div className="flex gap-4 items-center justify-center">
            <Image
              src="/logo.png"
              alt="First Time Mortgages Logo"
              width={50}
              height={50}
            />
            <h1 className="text-md font-bold leading-none md:text-3xl">
              First Time Mortgages
            </h1>
          </div>

          <div className="flex gap-4 items-center justify-center flex-col lg:flex-row">
            <Link href="/about" className="text-md md:text-xl  hover:underline">
              about
            </Link>
            <Link
              href="/mortgages"
              className="text-md md:text-xl hover:underline"
            >
              mortgages ↓
            </Link>
            <Link
              href="/insurance"
              className="text-md md:text-xl hover:underline"
            >
              insurance ↓
            </Link>
            <Link href="/guides" className="text-md md:text-xl hover:underline">
              guides ↓
            </Link>
            <Link
              href="/credit-report"
              className="text-md md:text-xl hover:underline"
            >
              credit report
            </Link>
            <Link
              href="/contact"
              className="text-md md:text-xl hover:underline"
            >
              contact
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
