import Script from "next/script";
import { useEffect, useRef } from "react";

const carbonStyle = `
  #carbonads {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  }

  #carbonads {
    display: block;
    overflow: hidden;
    max-width: 728px;
    position: relative;
    background-color: hsl(0, 0%, 12%);
    border: solid 1px hsl(0, 0%, 15%);
    font-size: 22px;
    box-sizing: content-box;
    color: hsl(0, 0%, 90%);
  }

  #carbonads > span {
    display: block;
  }

  #carbonads a {
    color: inherit;
    text-decoration: none;
  }

  #carbonads a:hover {
    color: inherit;
  }

  .carbon-wrap {
    display: flex;
    align-items: center;
  }

  .carbon-img {
    display: block;
    margin: 0;
    line-height: 1;
  }

  .carbon-img img {
    display: block;
    height: 100px;
    width: auto;
  }

  .carbon-text {
    display: block;
    padding: 0 1em;
    line-height: 1.35;
    text-align: left;
  }

  .carbon-poweredby {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 6px 10px;
    background: hsl(0, 0%, 15%);
	  color: hsl(0, 0%, 90%);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 8px;
    border-top-left-radius: 4px;
    line-height: 1;
  }

  @media only screen and (min-width: 320px) and (max-width: 759px) {
    .carbon-text {
      font-size: 14px;
    }
  }
`;

export default function CarbonAds() {
  const dataFetch = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dataFetch.current) return;
    dataFetch.current = true;

    const script = document.createElement("script");
    script.id = "_carbonads_js";
    script.src = `//cdn.carbonads.com/carbon.js?serve=CWYDC53J&placement=gitfluencecom'`;
    containerRef.current?.appendChild(script);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: carbonStyle }} />
      <div
        className="mt-2 mb-10 flex w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] justify-center px-5 xl:px-0"
        ref={containerRef}
      />
    </>
  );
}
