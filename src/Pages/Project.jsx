import { faker } from "@faker-js/faker";
import { easeIn, easeInOut, motion } from "framer-motion";
import Card_Project from "../Components/Card_Project";

export default function Project() {
    const project = Array.from({ length: 8 }).map((item, id) => {
        faker.seed(id * 5)
        return {
            Title: faker.lorem.slug(),
            Image: faker.image.urlPicsumPhotos({ type: 'svg-base64', width: 1280, height: 720 }),
            Naration: faker.lorem.paragraphs()
        }
    })

    console.log(project)
    return (
        <div className="flex flex-col mx-10 lg:mx-20 space-y-12 md:mt-10" id="Project">
            <motion.h1 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }} className="text-center text-white font-bold text-2xl md:text-5xl">Project</motion.h1>
            <div className="flex flex-col gap-y-10 md:grid lg:grid-cols-2 md:gap-x-10">
                {project.map((item, index) => <motion.div initial="initial" whileInView="motion" variants={{ initial: { opacity: 0, y:0, x: index%2 == 0 ? -50 : 50 }, motion: { opacity: 1, x: 0,y:0, transition: { duration: 1 } } }}>
                    <Card_Project items={item} />
                </motion.div>)}
            </div>
        </div>
    )
}