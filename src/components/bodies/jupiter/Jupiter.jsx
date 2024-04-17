import { useState } from "react";
import { Sphere } from "../../models_templates/Sphere";

export function Jupiter({ body, size, rotSpeed, clouds }) {
  const [camPos, setCamPos] = useState({ x: 0, y: 0, z: 2 });

  const handleCamPos = (x, y, z) => {
    setCamPos({ x, y, z });
  };

  return (
    <section className="flex justify-between h-[800px] mx-8">
      <article className="flex flex-col w-[80%] gap-8 mx-14">
        <div className="flex mx-auto">
          <h2 className="text-4xl text-white">Jupiter</h2>
        </div>
        <div className="flex flex-col gap-6 mx-auto text-white">
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Physical Characteristics</h3>
            <p className="font-montserrat">
              Jupiter is the largest planet in our solar system, with a diameter
              of approximately 139,820 kilometers. Its iconic feature is the
              Great Red Spot, a massive storm that has been raging for
              centuries. Jupiter is a gas giant, composed mostly of hydrogen and
              helium, and lacks a solid surface like terrestrial planets. It has
              a dynamic atmosphere with colorful bands of clouds and powerful
              storms.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Moons</h3>
            <p className="font-montserrat">
              Jupiter is orbited by a vast system of moons, with over 70 known
              moons in total. Among its largest moons are Io, Europa, Ganymede,
              and Callisto. These moons are diverse worlds with their own unique
              features, including volcanic activity, subsurface oceans, and
              ancient surface terrains. They provide valuable insights into the
              formation and evolution of the Jovian system.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Exploration</h3>
            <p className="font-montserrat">
              Jupiter has been the subject of numerous space missions, including
              flybys by spacecraft like Voyager and Galileo, which provided
              unprecedented views of the planet and its moons. The Juno mission,
              currently in orbit around Jupiter, is studying the planet's
              magnetic field, atmosphere, and interior structure in detail,
              shedding light on its mysterious properties and origins.
            </p>
          </section>
        </div>
      </article>
      <div className="flex flex-col items-center gap-4 w-[20%] py-20 mx-auto">
        <button onClick={() => handleCamPos(0, 0, 2)} className="rounded-full w-20 border-2 p-2 border-dashed hover:p-1 duration-300">
          <img className="rounded-full" src="/assets/jupiter/spots/jupiter.png" alt="Big Jupiter storm" />
        </button>
        <button onClick={() => handleCamPos(0.73, -0.4, 0.80)} className="rounded-full w-20 border-2 p-2 border-dashed hover:p-1 duration-300">
          <img className="rounded-full" src="/assets/jupiter/spots/big_storm.png" alt="Big Jupiter storm" />
        </button>
      </div>
      <Sphere body={body} size={size} rotSpeed={rotSpeed} clouds={clouds} camPos={camPos} />
    </section>
  );
}
