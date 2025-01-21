import { motion, useDragControls } from "framer-motion"
import Icon from "../assets/rb_3127.png"
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoTiktok, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
export default function About() {
    return (
        <div className="z-0 justify-start md:justify-between flex flex-col-reverse mx-10 lg:mx-32 md:flex md:flex-row items-center md:min-h-screen text-white" id="About">
            <div className="flex flex-col space-y-3 md:space-y-8 drop-shadow-xl">
                <div className="flex flex-col space-y-3">
                    <motion.h1 initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" } }} className="font-semibold text-xl lg:text-3xl md:text-2xl">
                        Hello,It's Me
                    </motion.h1>
                    <motion.h1 initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" } }} className="font-bold text-2xl lg:text-5xl md:text-3xl">
                        Muhammad Tsaqif Rafif Radhitya
                    </motion.h1>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" } }} className="font-semibold lg:text-3xl md:text-2xl">
                        And I am Computer Science Student
                    </motion.h1>
                </div>
                <motion.h1 initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" } }} className="md:text-2xl text-xl" >Iam a computer science student</motion.h1>
                <div className="hidden space-x-7 md:flex">
                    <motion.a whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }} href="https://www.instagram.com/tsaqif_rr/" target="_blank" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoInstagram size={30} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }} href="https://wa.me/6285156360779" target="_blank" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.1, ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoWhatsapp size={30} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }} href="https://www.tiktok.com/@nobrands_footwear/video/7238473656811244805?q=nyari%20apa%20lu&t=1737408346914" target="_blank" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoTiktok size={30} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.1, transition: { duration: 0.2 } }} href="https://warpinator.com/wp-content/uploads/2022/04/Can-A-Deleted-Linkedin-Account-Be-Recovered.png" target="_blank" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoLinkedin size={30} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.2 } }} href="https://github.com/TsaqifRadhitya" target="_blank" initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" } }} className="lg:h-12 lg:w-12 w-10 h-10 border-2 border-green-500 rounded-full hover:bg-green-500 hover:bg-opacity-50 hover:cursor-pointer shadow-xl hover:shadow-red-500 flex justify-center items-center">
                        <IoLogoGithub size={30} />
                    </motion.a>
                </div>
                <motion.button whileTap={{ scale: 0.95, transition: { duration: 0.1 } }} initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }} className="btn btn-primary rounded-full hidden md:block w-1/2 shadow-sm hover:shadow-xl hover:shadow-red-600 text-white">More About Me</motion.button>
            </div>
            <motion.img drag dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} dragElastic={0.5} whileDrag={{ scale: 1.5, transition: { duration: 0.5 } }} whileTap={{ scale: 1.5, transition: { duration: 0.5 } }} dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }} initial={{ scale: 0.5 }} whileInView={{ scale: 1, transition: { delay: 0.2, duration: 0.8 } }} src={Icon} alt="icon" className="drop-shadow-2xl self-center max-w-sm xl:max-w-2xl" />
        </div>
    )
}