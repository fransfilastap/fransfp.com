import { motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import FFPCard from "../components/FFPCard";
import { Layout } from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";


const variants = {
    hidden: {
        opacity: 0,
        transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.85
        }
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0,
        transition: {
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 1
        }
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

const About: NextPage = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }
            , 300);
    },[]);

    return (
        <Layout>
            <BasicMeta title="About Me" />
            <div className="flex flex-col w-full px-4 mb-10 md:px-20">
                <motion.div initial="hidden" variants={variants} animate={visible ? 'visible' : 'hidden' } className="flex flex-col items-start justify-start mt-24 space-y-10 md:flex-row md:space-x-10">
                    <motion.div variants={itemVariants} className="w-full md:w-1/3">
                        <FFPCard title="About Me"/>
                    </motion.div>
                    <motion.article variants={itemVariants} className="flex flex-col w-full space-y-4 md:w-2/3">
                        <section className="flex flex-col space-y-2">
                            <h5 className="py-1 text-xl font-extrabold text-green-600 border-b-4 border-gray-700 dark:text-white max-w-fit font-display">Work/Activity</h5>
                            <p className="font-semibold text-justify text-black dark:text-white font-body">Hi,There! I&apos;m Frans. I currently work as information technology officer in one of Indonesia Goverment Office. Through this website I want to share and &quot;dump&quot; anything I want.</p>
                            <p className="font-semibold text-justify text-black dark:text-white font-body">I love to get involved in digital transformation process anywhere I work (especially in goverment use case). I found joys in solving real-life problems with code.</p>
                            <p className="font-semibold text-justify text-black dark:text-white font-body">While I&apos;m not in coding mode, I&apos;d love to play with My Kid, or grab my old analog camera to take some picture. </p>
                        </section>
                        <section className="flex flex-col space-y-2">
                            <h5 className="py-1 text-xl font-extrabold text-green-600 border-b-4 border-gray-700 dark:text-white max-w-fit font-display">Bio</h5>
                            <p className="flex flex-row space-x-3 font-semibold font-body"><span className="font-extrabold">1993</span> <span>Born in Sungai Liat, Bangka</span></p>
                            <p className="flex flex-row space-x-3 font-semibold font-body"><span className="font-extrabold">Late 2014</span> <span>Got My Bachelor degree in Information System from Sriwijaya University.</span></p>
                            <p className="flex flex-row space-x-3 font-semibold font-body"><span className="font-extrabold">2015</span> <span>Got My First Full-time job as engineer at Huawei Services.</span></p>
                            <p className="flex flex-row space-x-3 font-semibold font-body"><span className="font-extrabold">2016</span> <span>Work at XL Axiata as a Middleware Developer.</span></p>
                            <p className="flex flex-row space-x-3 font-semibold font-body"><span className="font-extrabold">2018 - Now</span> <span>Serve the nation as Information Technlogy officer.</span></p>
                        </section>
                        <section className="flex flex-col space-y-2">
                            <h5 className="py-1 text-xl font-extrabold text-green-600 border-b-4 border-gray-700 dark:text-white max-w-fit font-display">I LOVE TO ...</h5>
                            <p className="font-semibold text-black dark:text-white">Art, Photography, Movies, Code.</p>
                        </section>
                    </motion.article>
                </motion.div>
            </div>
        </Layout>
    );
}

export default About;