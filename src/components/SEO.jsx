import React, { useMemo } from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function SEO({ title, image = "", translation = "common" }) {
  const { lang } = useTranslation(translation)
  const projectName = useMemo(() => {
    return lang === "uz" ? "Fikr atolyesi" : "Фикр атолйеси";
  }, [lang])
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1  maximum-scale=1, user-scalable=0"
      />
      <meta charSet="utf-8" />
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
      <meta name="twitter:image" content="/svg/logoSite.svg" />

      <link rel="icon" href="/svg/logoSite.svg" />
    </Head>
  );
}
