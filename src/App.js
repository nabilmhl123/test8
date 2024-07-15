import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Brands from "./Components/Brands"
import About from "./Components/About"
import Skills from "./Components/Skills"

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Brands/>
      <About/>
      <Skills/>
      <div style={{ height: '2000px' }}></div>
    </div>
  )
}

export default App
