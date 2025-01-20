import { useState } from "react"

export default function Navbar() {
    const html = document.querySelector('html')
    console.log(html)
    const [Theme, SetThem] = useState(false);

    function changeTheme() {
        Theme ? html.classList.remove('dark') : html.classList.add('dark')
        SetThem((prev) => !prev)
    }
    return (
        <div className="px-10 md:fixed sticky top-0 w-screen md:px-32 py-5 shadow-sm z-96 md:flex justify-between items-center text-white text-xl font-semibold">
            <h1>Portofolio</h1>
            <div className="drop-shadow-2xl space-x-10 hidden md:block">
                <a className="hover:text-gray-300" href="#About">Home</a>
                <a className="hover:text-gray-300" href="#Skill">Skill</a>
                <a className="hover:text-gray-300" href="#Project">Project</a>
                <a className="hover:text-gray-300" href="#Experience">Experience</a>
                <a className="hover:text-gray-300" href="#Contact">Contact</a>
            </div>
            
        </div>
    )
}