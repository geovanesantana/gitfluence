import Link from "next/link";
import React, { useState } from "react";
import { ReactNode, useEffect } from "react";
import Meta from "./meta";
import { Github } from "@/components/shared/icons";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const [terminalRef, setTerminalRef] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (document) {
      setTerminalRef(document.getElementById("terminal"));
    }
  }, []);

  const scrollToTerminal = () => {
    if (terminalRef !== null) {
      terminalRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Meta {...meta} />

      <div className="h-full w-full bg-black bg-hero-pattern bg-center antialiased">
        <header className="w-full">
          <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
            <Link
              href="/"
              className="relative flex items-center font-display text-2xl"
            >
              <p className="font-sans font-bold text-white">GitFluence</p>
            </Link>

            <div>
              <button onClick={scrollToTerminal}>
                <p className="bg-gradient-to-r from-yellow to-amber bg-clip-text text-base text-transparent hover:from-yellow-400 hover:to-amber-400">
                  Get Started
                </p>
              </button>
            </div>
          </div>
        </header>

        <main className="flex w-full flex-col items-center justify-center pt-20">
          {children}
        </main>

        <div className="h-40 w-full bg-gradient-to-t from-slate to-transparent" />
      </div>

      <footer className="mx-auto w-full max-w-screen-xl py-10 text-gray">
        <div className="flex flex-col items-center text-sm md:flex-row md:justify-between">
          <p className="order-2 mt-3 space-y-4 text-sm md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} GitFluence
          </p>

          <ul className="order-1 flex flex-wrap items-center text-sm md:order-2">
            {/* <li>
              <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li> */}
            <li>
              <a
                className="text-gray transition-all duration-75 hover:opacity-90"
                href="https://github.com/geovanesantana/gitfluence"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-7 w-7" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
