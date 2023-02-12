import Link from "next/link";
import { ReactNode } from "react";
import Meta from "./meta";

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
  return (
    <>
      <Meta {...meta} />

      <div className="h-full w-full bg-black bg-hero-pattern bg-center antialiased">
        <div className="w-full">
          <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
            <Link
              href="/"
              className="relative flex items-center font-display text-2xl"
            >
              <p className="font-sans font-bold text-white">GitFluence</p>
            </Link>

            <div>
              <a href="#terminal">
                <p className="bg-gradient-to-r from-yellow to-amber bg-clip-text text-base text-transparent hover:from-yellow-400 hover:to-amber-400">
                  Get Started
                </p>
              </a>
            </div>
          </div>
        </div>

        <main className="flex w-full flex-col items-center justify-center pt-20">
          {children}
        </main>

        <div className="h-40 w-full bg-gradient-to-t from-slate to-transparent" />
      </div>

      <div className="h-24 w-full bg-slate py-5 text-center">
        <p className="text-sm text-gray">
          © {new Date().getFullYear()} GitFluence
        </p>
      </div>
    </>
  );
}
