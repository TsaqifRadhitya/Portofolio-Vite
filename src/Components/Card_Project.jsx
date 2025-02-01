import { motion } from "framer-motion"

export default function Card_Project({ items }) {
    return (
        <div className="group h-full shadow-md group md:space-x-5 md:flex-row flex flex-col gap-y-5 bg-green-500 p-5 rounded-3xl bg-opacity-10 hover:bg-opacity-50 hover:scale-105 transition ease-in-out duration-500 hover:drop-shadow-2xl">
            <motion.img initial={{ y: 0, scale: 0.8 }} whileInView={{ y: 0, scale: 1, transition: { duration: 1 } }} className="rounded-xl z-0 grayscale group-hover:grayscale-0 group-hover:shadow-xl md:max-h-[100px] xl:max-h-[200px]" src={items.Image} alt={items.Title} />
            <div className="flex flex-col text-sm gap-y-5 ease-in-out group-hover:font-bold group-hover:text-white">
                <h1 className="font-semibold transition text-xl ease-in-out group-hover:font-bold group-hover:text-white">{items.Title}</h1>
                <h1 className="ease-in-out group-hover:font-bold text-justify">{items.Naration}</h1>
            </div>
        </div>
    )
}