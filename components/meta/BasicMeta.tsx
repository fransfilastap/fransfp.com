import Head from "next/head";
import Config from "../../lib/config";

type Props = {
    title?: string,
    description?: string,
    url?: string,
    keywords?: string[],
    author?: string
}

const BasicMeta = ({title,description,url,keywords,author}:Props) => {
    return (
        <Head>
            <title>{ title ? [title, Config.site_title].join(" | ") : Config.site_title }</title>
            <meta name="description" content={description || Config.site_description} />
            <meta name="keywords" content={keywords ? keywords.join(",") : Config.site_keywords.map((it) => it.keyword).join(",")} />
            {author ? <meta name="author" content={author} /> : null}
            <link rel="canonical" href={Config.site_url + url} />        
        </Head>
    );
}

export default BasicMeta;