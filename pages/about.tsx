import { motion } from "framer-motion";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import FFPCard from "../components/FFPCard";
import Heading from "../components/Heading";
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
            <div className="container flex flex-col mt-16 w-100 md:flex-row md:space-x-6">
                <motion.div variants={itemVariants}>
                        <FFPCard title="About Me"/>
                    </motion.div>
                <motion.div initial="hidden" variants={variants} animate={visible ? 'visible' : 'hidden'} className="flex flex-col items-start justify-start mx-6 mt-6 space-y-10 md:mx-0">
                    
                    <motion.article variants={itemVariants} className="flex flex-col w-full space-y-4 md:w-2/3">
                        <section className="flex flex-col space-y-2">
                            <Heading text="Pekerjaan"/>
                            <p className="text-sm text-justify text-black dark:text-white font-display">Saat ini saya bekerja sebagai seorang ASN di salah satu instansi vertikal.</p>
                            <p className="text-sm text-justify text-black dark:text-white font-display">Saya sangat menyukai keterlibatan dalam proses transformasi digital (khususnya di instansi pemerintah). Saya menemukan sebuah kesenangan jika dapat memberikan impact kepada tatalaksana pemerintahan.</p>
                            <p className="text-sm text-justify text-black dark:text-white font-display">Ketika saya memiliki waktu kosong, alias tidak ngoding, Saya seringkali menghabiskan waktu dengan bermain bersama anak saya. Terkadang saya juga suka mengambil gambar dengan kamera analog/mirrorless/handphone saya.</p>
                        </section>
                        <section className="flex flex-col space-y-2">
                            <Heading text="Bio"/>
                            <p className="flex flex-row space-x-3 font-sm"><span className="font-extrabold font-body">1993</span> <span className="text-sm font-display">Lahir ke dunia fana ini, di Sungai Liat, Bangka.</span></p>
                            <p className="flex flex-row space-x-3 font-sm"><span className="font-extrabold font-body">Akhir 2014</span> <span className="text-sm font-display">Menyelesaikan kuliah di jurusan Sistem Informasi Universitas Sriwijaya</span></p>
                            <p className="flex flex-row space-x-3 font-sm"><span className="font-extrabold font-body">2015</span> <span className="text-sm font-display">Mendapatkan pekerjaan full time pertama saya sebagai Engineer di Huawei Services.</span></p>
                            <p className="flex flex-row space-x-3 font-sm"><span className="font-extrabold font-body">2016</span> <span className="text-sm font-display">Memulai pekerjaan sebagai middleware developer di XL Axiata.</span></p>
                            <p className="flex flex-row space-x-3 font-sm"><span className="font-extrabold font-body">2018 - Now</span> <span className="text-sm font-display">Mengabdi secara profesional kepada Negara Tercinta Indonesia 🇲🇨 sebagai staff pengelola teknologi informasi .</span></p>
                        </section>
                        <section className="flex flex-col space-y-2">
                            <Heading text="Hobi"/>
                            <p className="text-sm font-normal text-black font-display">Art, Photography, Movies, Code.</p>
                        </section>
                    </motion.article>
                </motion.div>
            </div>
        </Layout>
    );
}

export default About;