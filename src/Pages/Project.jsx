import { faker } from "@faker-js/faker";
import { easeIn, easeInOut, motion } from "framer-motion";
import Card_Project from "../Components/Card_Project";


export default function Project() {
    const project = Array.from({ length: 8 }).map((item, id) => {
        faker.seed(id * 5)
        return {
            Title: "MeowInn",
            Image: "src/assets/Frame 1.png",
            Naration: faker.lorem.paragraphs()
        }
    })
    return (
        <div className="flex flex-col py-10 lg:py-20 mx-10 lg:mx-32 space-y-12 md:space-y-20 md:mt-10" id="Project">
            <motion.h1 whileTap={{ scale:2,rotate:360}} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} className="mx-auto w-fit z-50 text-center text-white font-bold text-2xl md:text-5xl">Project</motion.h1>
            <div className="flex flex-col gap-y-10 md:grid lg:grid-cols-2 md:gap-x-10">
                {project.map((item, index) => <motion.div className="w-fit" initial="initial" whileInView="motion" variants={{ initial: { opacity: 0, y: 0, x: index % 2 == 0 ? -15 : 15}, motion: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } } }}>
                    <Card_Project items={item} />
                </motion.div>)}
            </div>
        </div>
    )
}