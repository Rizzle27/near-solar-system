import { Header } from "./components/layouts/Header"

import { Menu } from "./components/menu/Menu"
import { Earth } from "./components/earth/Earth"
import { Mars } from "./components/mars/Mars"
import { Jupiter } from "./components/jupiter/Jupiter"
import { useState } from "react"

function App() {
  const [body, setBody] = useState("earth")

  const handleBody = (body) => () => setBody(body)

  return (
    <div className="font-orbitron bg-black bg-stars">
      <Header />
      <main>
        <section className="py-12 flex justify-center text-white gap-8 text-2xl">
          <button className={`${body == "earth" && "text-blue-700"} transition-all duration-300`} onClick={handleBody("earth")}>Earth</button>
          <button className={`${body == "mars" && "text-red-700"} transition-all duration-300`} onClick={handleBody("mars")}>Mars</button>
          <button className={`${body == "jupiter" && "text-orange-700"} transition-all duration-300`} onClick={handleBody("jupiter")}>Jupiter</button>
        </section>
        {body == "earth" && (<Earth />)}
        {body == "mars" && (<Mars />)}
        {body == "jupiter" && (<Jupiter />)}
      </main>
    </div>
  )
}

export default App
