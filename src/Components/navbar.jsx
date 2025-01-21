import { useEffect, useState } from "react"
import { motion } from "framer-motion";

export default function Navbar() {
    const html = document.querySelector('html')
    console.log(html.classList)
    const [Theme, SetThem] = useState(true);

    function changeTheme() {
        Theme ? html.classList.remove('dark') : html.classList.add('dark')
        SetThem((prev) => !prev)
    }
    return (
        <motion.div initial={{ y:-200 }} animate={{ y:0,transition:{duration:0.5,delay:0.2} }} className="z-50 px-10 md:fixed sticky top-0 w-full md:-px-20 lg:px-32 py-5 shadow-sm z-96 md:flex justify-between items-center text-white text-xl font-semibold">
            <h1>Portofolio</h1>
            <div className="drop-shadow-2xl space-x-10 hidden md:block">
                <a className="hover:text-gray-300" href="#About">Home</a>
                <a className="hover:text-gray-300" href="#Skill">Skill</a>
                <a className="hover:text-gray-300" href="#Project">Project</a>
                <a className="hover:text-gray-300" href="#Experience">Experience</a>
                <a className="hover:text-gray-300" href="#Contact">Contact</a>
            </div>
            
        </motion.div>
    )
}