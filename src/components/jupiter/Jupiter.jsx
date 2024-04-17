import { Sphere } from "../sphere/Sphere";

export function Jupiter() {
  return (
    <section className="flex justify-between h-[800px]">
      <article className="flex flex-col gap-8">
        <div className="flex mx-auto">
          <h2 className="text-4xl text-white">Jupiter</h2>
        </div>
        <div className="flex flex-col gap-6 mx-auto w-[70%] text-white">
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

      <Sphere body={"jupiter"} size={0.7} rotSpeed={0.00041} clouds={false} />
    </section>
  );
}
