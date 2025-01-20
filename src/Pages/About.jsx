import { motion } from "framer-motion"
import Icon from "../assets/rb_3127.png"
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoTiktok, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
export default function About() {
    const animasi = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.2, // Animasi anak-anak satu per satu
            },
        }
    };
    return (
        <div className="justify-between mx-10 lg:mx-32 md:flex md:flex-row items-center min-h-screen text-white" id="About">
            <motion.img initial={{ scale: 0.5 }} whileInView={{ scale: 1, transition: { duration: 0.8 } }} src={Icon} alt="icon" className="md:hidden" />
            <div className="flex flex-col space-y-3 md:space-y-8 drop-shadow-xl">
                <div className="flex flex-col space-y-3">
                    <motion.h1 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8,ease: "easeInOut" } }} className="font-semibold text-xl lg:text-3xl md:text-2xl">
                        Hello,It's Me
                    </motion.h1>
                    <motion.h1 initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8,ease: "easeInOut" } }} className="font-bold text-2xl lg:text-5xl md:text-3xl">
                        Muhammad Tsaqif Rafif Radhitya
                    </motion.h1>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8,ease: "easeInOut" } }} className="font-semibold lg:text-3xl md:text-2xl">
                        And I am Computer Science Student
                    </motion.h1>
                </div>
                <motion.h1 initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8,ease: "easeInOut" } }} className="md:text-2xl text-xl" >Iam a computer science student</motion.h1>
                <div className="hidden space-x-7 md:flex">
                    <motion.div de initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8,ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoInstagram size={30} />
                    </motion.div>
                    <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.1,ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoWhatsapp size={30} />
                    </motion.div>
                    <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2,ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoTiktok size={30} />
                    </motion.div>
                    <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3,ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoLinkedin size={30} />
                    </motion.div>
                    <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3,ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoGithub size={30} />
                    </motion.div>
                </div>
                <motion.h1 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5,ease: "easeInOut" } }} className="hidden md:block md:w-1/3 text-center bg-blue-500 py-4 rounded-full font-semibold hover:cursor-pointer box-shadow shadow-xl hover:shadow-red-500 dr">More About Me</motion.h1>
            </div>
            <motion.img initial={{ scale: 0.5 }} whileInView={{ scale: 1, transition: { duration: 0.8 } }} src={Icon} alt="icon" className="hidden md:block self-center  md:w-[500px]" />
        </div>
    )
}