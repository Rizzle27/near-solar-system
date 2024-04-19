import { Header } from "./components/layouts/Header"

import { Menu } from "./components/menu/Menu"
import { Earth } from "./components/bodies/earth/Earth"
import { Mars } from "./components/bodies/mars/Mars"
import { Jupiter } from "./components/bodies/jupiter/Jupiter"
import { useState } from "react"

function App() {
  const [body, setBody] = useState("earth")
  const handleBody = (body) => () => setBody(body)

  const [rotationSpeed, setRotationSpeed] = useState(0.01)

  return (
    <div className="font-orbitron bg-black bg-stars">
      <Header />
      <main>
        <section className="py-12 flex justify-center text-white gap-8 text-2xl">
          <button className={`${body == "earth" && "text-blue-700"} transition-all duration-300`} onClick={handleBody("earth")}>Earth</button>
          <button className={`${body == "mars" && "text-red-700"} transition-all duration-300`} onClick={handleBody("mars")}>Mars</button>
          <button className={`${body == "jupiter" && "text-orange-700"} transition-all duration-300`} onClick={handleBody("jupiter")}>Jupiter</button>
        </section>
        {body == "mars" && (<Mars body={"mars"} size={0.6} rotSpeed={0.00103} clouds={false} />)}
        {body == "earth" && (<Earth body={"earth"} size={0.6} rotSpeed={0.001} clouds={true} />)}
        {body == "jupiter" && (<Jupiter body={"jupiter"} size={0.6} rotSpeed={0.00103} clouds={false} />)}
      </main>
    </div>
  )
}

export default App
