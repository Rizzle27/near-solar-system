import { useState } from "react";
import { Sphere } from "../../models_templates/Sphere";

export function Earth({ body, size, rotSpeed, clouds }) {
  const [camPos, setCamPos] = useState({ x: 0, y: 0, z: 2 });

  const handleCamPos = (x, y, z) => {
    setCamPos({ x, y, z });
  };

  return (
    <section className="flex md:flex-row flex-col justify-between h-[800px]">
      <article className="flex flex-col gap-8">
        <div className="flex mx-auto">
          <h2 className="text-4xl text-white">Earth</h2>
        </div>
        <div className="flex flex-col gap-6 mx-auto w-[70%] text-white">
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Physical Characteristics</h3>
            <p className="font-montserrat">
              With a diameter of approximately 12,742 kilometers, Earth is the
              third planet from the Sun and the only astronomical object known
              to harbor life. Its surface is covered by vast oceans, continents,
              and diverse ecosystems, making it a truly unique and beautiful
              world. Earth's atmosphere, composed mainly of nitrogen and oxygen,
              protects life on the planet and regulates its climate.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Natural Wonders</h3>
            <p className="font-montserrat">
              Earth is home to a wide range of natural wonders, including
              majestic mountains, lush rainforests, and expansive deserts. The
              Grand Canyon, the Great Barrier Reef, and the Amazon Rainforest
              are just a few examples of the breathtaking landscapes found on
              our planet. These natural wonders provide habitats for countless
              species of plants and animals and attract millions of visitors
              each year.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Human Civilization</h3>
            <p className="font-montserrat">
              Earth is also the only known planet to support human civilization.
              From ancient civilizations like the Egyptians and Greeks to modern
              societies with advanced technology and infrastructure, humans have
              flourished on Earth for thousands of years. Cities, roads, and
              monuments dot the landscape, showcasing the ingenuity and
              creativity of human culture.
            </p>
          </section>
        </div>
      </article>
      <Sphere body={body} size={size} rotSpeed={rotSpeed} clouds={clouds} camPos={camPos} />
    </section>
  );
}
