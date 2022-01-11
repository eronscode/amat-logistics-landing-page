import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { host } from "lib/constants";

interface Props {
  type: "article" | "website";
  data?: {
    description: string;
    title: string;
    og_description: string;
    og_title: string;
    twitter_description: string;
    twitter_title: string;
    og_image: string;
  };
  lang?: string;
  image?: string;
}

export const Seo: React.FunctionComponent<Props> = ({
  type,
  lang,
  data,
  image = "/images/pyo-logo.jpg",
}) => {
  const { asPath } = useRouter();
  const defaultValues = {
    lang: "en-US",
    siteName: "AmatFood",
    author: "AmatFood",
    description: "Order in 3-clicks. Delivered At Your Doorstep.",
  };
  const {
    description,
    title,
    og_description,
    og_title,
    twitter_description,
    twitter_title,
    og_image,
  } = data || {};
  const metaDescription = description || defaultValues.description;
  const fullTitle = title
    ? `${defaultValues.siteName} | ${title}`
    : defaultValues.siteName;
  const ogCover = og_image || image;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta
        key="description"
        name="description"
        content={
          description ? description.slice(0, 160) : defaultValues.description
        }
      />

      <meta
        key="og:locale"
        property="og:locale"
        content={lang || defaultValues.lang}
      />
      <meta key="og:type" property="og:type" content={type} />
      <meta
        key="og:title"
        property="og:title"
        content={og_title || fullTitle}
      />
      <meta
        key="og:description"
        property="og:description"
        content={og_description || metaDescription}
      />
      <meta key="og:url" property="og:url" content={`${host}${asPath}`} />
      <meta
        key="og:site_name"
        property="og:site_name"
        content={defaultValues.siteName}
      />
      {ogCover && <meta key="og:image" property="og:image" content={ogCover} />}

      {/* {type === 'article' && (
				<meta key="article:publisher" property="article:publisher" content="https://twitter.com/" />
			)}
			{type === 'article' && author && <meta key="article:author" property="article:author" content={author} />} */}

      <meta name="twitter:title" content={twitter_title || fullTitle} />
      <meta
        name="twitter:description"
        content={twitter_description || metaDescription}
      />
      {/* <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
			<meta key="twitter:site" name="twitter:site" content="@username" /> */}
    </Head>
  );
};
