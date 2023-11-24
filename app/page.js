import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-5 lg:py-24">
      <div className="items-center sm:flex relative">
        <div className="w-full sm:w-2/4 mb-16 sm:mb-0 ">
          <h1 className="text-4xl md:text-6xl font-normal  max-w-[450px] mb-5 md:mb-10">
            The UK’s best
            <br /> mortgage advice
          </h1>

          <p className="text-md md:text-3xl mb-2 md:mb-5">
            ...according to our office dog, Kevin.
          </p>
          <p className="text-md md:text-3xl mb-2 md:mb-5">
            We’re here to guide you through the process of purchasing your first
            home.
          </p>
          <p className="text-md md:text-3xl mb-[25px] md:mb-[60px] ">
            We’ve put together a hub of knowledge, useful calculators, all kinds
            of comparisons, and a credit report - all for <strong>free</strong>.
          </p>
          <Link
            href="/why"
            className="text-md lg:text-xl px-8 py-2 bg-[#282828] rounded-md text-white transition hover:bg-[#000] "
          >
            why is this information free?
          </Link>
        </div>
        <div className="w-full sm:w-2/4">
          <Image
            src="/houseImage.png"
            width={512}
            height={512}
            className="m-auto md:ml-auto max-w-xs md:mr-0 md:max-w-sm lg:max-w-none"
          />
        </div>

        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2">
          <p className="text-center flex items-center flex-col">
            Scroll down for more
            <br />
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 animate-bounce mt-2"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </p>
        </div>
      </div>
    </main>
  );
}
