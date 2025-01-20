import { motion } from "framer-motion"

export default function Card_Project({ items }) {
    return (
        <div className="h-full shadow-md group md:space-x-5 md:flex-row flex flex-col gap-y-5 bg-green-500 p-5 rounded-3xl bg-opacity-10 hover:bg-opacity-50 hover:scale-105 transition ease-in-out duration-500 hover:drop-shadow-2xl">
            <div className="h-full">
                <motion.img initial = {{ y : 0, scale:0.8 }} whileInView={{  y : 0, scale : 1 ,transition : {duration : 1} }} className = "rounded-xl grayscale group-hover:grayscale-0 group-hover:shadow-xl" src={items.Image} alt={items.Title} />
            </div>
            <div className="flex flex-col text-sm gap-y-5 ">
                <h1 className="font-semibold text-xl">{items.Title}</h1>
                <h1 className="">{items.Naration}</h1>
            </div>
        </div>)
}