import { faker } from "@faker-js/faker";
import { motion } from "framer-motion";
import Card_Project from "../Components/Card_Project";
import Image from "../assets/Frame 1.png"


export default function Project() {
    const project = Array.from({ length: 4 }).map((item, id) => {
        faker.seed(id * 5)
        return {
            Title: "MeowInn",
            Image: Image,
            Naration: "MeowInn adalah aplikasi berbasis desktop yang dirancang untuk mempermudah pengelolaan jasa penitipan kucing. Aplikasi ini menawarkan solusi komprehensif untuk administrasi cat hotel, mulai dari pencatatan reservasi, pengelolaan data pelanggan dan kucing, hingga perhitungan otomatis biaya layanan. MeowInn juga dilengkapi fitur laporan riwayat yang membantu pemilik bisnis memantau kinerja layanan secara efisien. Dengan teknologi ini, penyedia jasa dapat mengurangi kesalahan manual, meningkatkan efisiensi operasional, dan memberikan pengalaman pelanggan yang lebih baik dan terpercaya."
        }
    })
    return (
        <div className="flex flex-col py-10 lg:py-20 mx-10 lg:mx-32 space-y-12 md:space-y-20 md:mt-10" id="Project">
            <motion.h1 whileTap={{ scale: 2, rotate: 360 }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} className="mx-auto w-fit z-50 text-center text-white font-bold text-2xl md:text-5xl">Project</motion.h1>
            <div className="flex flex-col gap-y-10 md:grid lg:grid-cols-2 md:gap-x-10">
                {project.map((item, index) => <motion.div className="w-fit" initial="initial" whileInView="motion" variants={{ initial: { opacity: 0, y: 0, x: index % 2 == 0 ? -15 : 15 }, motion: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } } }}>
                    <Card_Project items={item} />
                </motion.div>)}
            </div>
        </div>
    )
}