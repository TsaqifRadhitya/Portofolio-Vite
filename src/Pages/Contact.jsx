import { IoLogoInstagram, IoLogoWhatsapp, IoLogoTiktok, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export default function Contact() {
    return (
        <div id="Contact" className="bg-green-600 flex px-20 lg:px-32 py-10 gap-x-32 justify-center bg-opacity-50">
            <div className="flex flex-col space-y-5 flex-1">
                <div className="flex space-x-5">
                    <input type="email" placeholder="Email" className="rounded-3xl min-h-12 px-5 w-full" />
                    <input type="email" placeholder="Phone" className="rounded-3xl min-h-12 px-5 w-full" />
                </div>
                <input type="email" placeholder="Name" className="rounded-3xl min-h-12 px-5" />
                <textarea type="richtext" placeholder="Name" className="rounded-3xl min-h-32 p-5" />
                <button className="btn btn-success rounded-full">Submit</button>
            </div>
            <div className="md:flex flex-col bg-black px-20 rounded-2xl space-y-2 justify-center gap-y-5 hidden">
                <div className="flex items-center space-x-5 text-xl">
                    <IoLogoInstagram />
                    <a href="https://www.instagram.com/tsaqif_rr/" className="underline underline-offset-2" target="blank">Instagram</a>
                </div>
                <div className="flex items-center space-x-5 text-xl">
                    <IoLogoWhatsapp />
                    <a href="https://wa.me/6285156360779" className="underline underline-offset-2">Whatsapp</a>
                </div>
                <div className="flex items-center space-x-5 text-xl">
                    <IoLogoTiktok />
                    <a href="" className="underline underline-offset-2 text-xl">Tiktok</a>
                </div>
                <div className="flex items-center space-x-5 text-xl">
                    <IoLogoLinkedin />
                    <a href="" className="underline underline-offset-2">Linkedinn</a>
                </div>
                <div className="flex items-center space-x-5 text-xl">
                    <IoLogoGithub />
                    <a href="" className="underline underline-offset-2">Github</a>
                </div>
            </div>
        </div>
    )
}