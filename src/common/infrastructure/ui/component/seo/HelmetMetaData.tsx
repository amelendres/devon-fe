import React from "react";
import { Helmet } from "react-helmet";
import { MetaData } from "../../../../domain/seo/MetaData";

type MetaDataProps = {
    meta: MetaData
  }

export const HelmetMetaData: React.FC<MetaDataProps> = ({ meta }) => {

    const currentUrl = window.location.href;
    const appImageUrl = `${process.env.PUBLIC_URL}/logo192.png`;
    const no_amp = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        'headline': meta.title,
        'image': [
            meta.imageUrl
        ],
        "datePublished": "2020-01-01T08:00:00+08:00",
        "dateModified": "2020-01-01T08:00:00+08:00",
    }

    return (
    <Helmet>
        <title>{meta.title}</title>
        <link rel="canonical" href={currentUrl} />
        {/* <meta charset="utf-8" /> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf_token" content="" />
        <meta property="type" content="website" />
        <meta property="url" content={currentUrl} />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={appImageUrl} />
        <meta name="theme-color" content="#ffffff" />
        <meta name="_token" content="" />
        <meta name="robots" content="noodp" />
        <meta property="title" content={meta.title} />
        <meta property="quote" content={meta.quote} />
        <meta name="description" content={meta.description} />
        <meta property="imageUrl" content={meta.imageUrl} />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:quote" content={meta.quote} />
        <meta property="og:hashtag" content={meta.hashtag} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta content="image/*" property="og:image:type" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={meta.siteName} />
        <meta property="og:description" content={meta.description} />  

         <script type="application/ld+json">
         { JSON.stringify(no_amp) }
        </script>  
        </Helmet>
    );
}

export default HelmetMetaData;