import React, { FC, useMemo } from "react";
import Head from "next/head";

interface SeoTypes {
  title?: string;
  image?: string;
}

const SEO = ({ title = "", image = "" }: SeoTypes) => {
  const projectName = "Mountain";
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href={image || "/svg/logoSite.svg"} />
      <title>{title || projectName}</title>
      <meta name="description" content="Next js" />
      <meta
        name="keywords"
        content="Fikr, kurslar, islom, Abdukarim Mirzayev, tashkent"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || projectName} key="ogtitle" />
      <meta property="og:description" content="Next js" key="ogdesc" />
      <meta
        property="og:site_name"
        content={title || projectName}
        key="ogsitename"
      />
      <meta
        property="og:image"
        content={image || "/svg/logoSite.svg"}
        key="ogimage"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title || projectName} />
      <meta name="twitter:description" content="Next js" />
      <meta name="twitter:site" content={title || projectName} />
      <meta name="twitter:creator" content="Abdukarim Mirzayev" />
      <meta name="twitter:image" content={image || "/svg/logoSite.svg"} />
    </Head>
  );
};

export default SEO;
