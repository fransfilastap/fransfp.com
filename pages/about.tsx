import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout";

const About: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Post - fransfp.com</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto">
                <div className="flex flex-col items-start justify-start mt-24 md:flex-row md:space-x-10">
                    <div className="w-full md:w-1/3">
                        <div className="w-full p-4 rounded-lg bg-amber-500 min-h-[15rem]">
                            <h1 className="font-bold text-blue-500 text-7xl">About me</h1>
                        </div>
                    </div>
                    <article className="flex flex-col w-full space-y-4 md:w-2/3">
                        <section className="flex flex-col space-y-2">
                            <h5 className="py-1 text-xl font-extrabold text-black border-b-4 border-gray-700 dark:text-white max-w-fit">Work/Activity</h5>
                            <p className="text-base font-semibold text-black dark:text-white">Hi,There! I&apos;m Frans. I currently work as information technology officer in one of Indonesia Goverment Office. Through this website I want to share and &quot;dump&quot; anything I want.</p>
                            <p className="text-base font-semibold text-black dark:text-white">I love to get involved in digital transformation process anywhere I work (especially in goverment use case). I found joys in solving real-life problems with code.</p>
                            <p className="text-base font-semibold text-black dark:text-white">While I&apos;m not in coding mode, I&apos;d love to play with My Kid, or grab my old analog camera to take some picture. </p>
                        </section>
                        <section className="flex flex-col space-y-2">
                            <h5 className="py-1 text-xl font-extrabold text-black border-b-4 border-gray-700 dark:text-white max-w-fit">Bio</h5>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">1993</span> <span>Born in Sungai Liat, Bangka</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">Late 2014</span> <span>Got My Bachelor degree in Information System from Sriwijaya University.</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">2015</span> <span>Got My First Full-time job as engineer at Huawei Services.</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">2016</span> <span>Left Huawei Service, and Got Hired in XL Axiata as a Middleware Developer.</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">2018 - Now</span> <span>Left XL Axiata, and serve the nation as Information Technlogy officer.</span></p>
                        </section>
                        <section className="flex flex-col space-y-2">
                            <h5 className="py-1 text-xl font-extrabold text-black border-b-4 border-gray-700 dark:text-white max-w-fit">I ❤️</h5>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">1993</span> <span>Born in Sungai Liat, Bangka</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">Late 2014</span> <span>Got My Bachelor degree in Information System from Sriwijaya University.</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">2015</span> <span>Got My First Full-time job as engineer at Huawei Services.</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">2016</span> <span>Left Huawei Service, and Got Hired in XL Axiata as a Middleware Developer.</span></p>
                            <p className="flex flex-row space-x-3"><span className="font-extrabold">2018 - Now</span> <span>Left XL Axiata, and serve the nation as Information Technlogy officer.</span></p>
                        </section>
                    </article>
                </div>
            </div>
        </Layout>
    );
}

export default About;