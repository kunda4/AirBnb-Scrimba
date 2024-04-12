import Navbar from "./components/Navbar"
import Card from "./components/card"
import Hero from "./components/hero"
import data from "./data"

function App() {

 const cards = data.map((element) => {
  return (
    <Card
    key={element.id}
    {...element}
  />
  )
 })
  return (
    <>
    <div>
      <Navbar/>
      <Hero/>
      <div className="flex justify-center gap-6 px-24 py-10">
        {cards}</div>
      </div>
    </>
  )
}

export default App
