import Navbar from "../Components/navbar"
import About from "./About"
import Skill from "./Skill"
import Project from "./Project"
export default function App() {
  return (
    <div className="bg-custom-gradient w-screen md:gap-y-32">
      <Navbar />
      <About />
      <Skill/>
      <Project/>
    </div>
  )
}
