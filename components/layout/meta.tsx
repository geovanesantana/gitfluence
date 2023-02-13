import Head from "next/head";

const DOMAIN = "https://gitfluence.com";

export default function Meta({
  title = "GitFluence - Find the Git Command You Need Now!",
  description = "GitFluence is AI-driven solution that helps you quickly find the right command. Get started with Git Command Generator today and save time.",
  image = `${DOMAIN}/api/og`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta
        name="google-site-verification"
        content="PO2VDL9wJjznINla6Aoc40WI5JIGJw-VVyyVMllNct4"
      />
    </Head>
  );
}
