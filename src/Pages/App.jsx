import Navbar from "../Components/navbar"
import About from "./About"
import Skill from "./Skill"
import Project from "./Project"
import Contact from "./Contact"
export default function App() {
  return (
    <div className="bg-custom-gradient md:gap-y-32 overflow-y-hidden">
      <Navbar />
      <About />
      <Skill/>
      <Project/>
      <Contact/>
    </div>
  )
}
