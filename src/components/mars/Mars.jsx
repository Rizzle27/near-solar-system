import { Sphere } from "../sphere/Sphere";

export function Mars() {
  return (
    <section className="flex justify-between h-[800px]">
      <article className="flex flex-col gap-8">
        <div className="flex mx-auto">
          <h2 className="text-4xl text-white">Mars</h2>
        </div>
        <div className="flex flex-col gap-6 mx-auto w-[70%] text-white">
          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Physical Characteristics</h3>
            <p className="font-montserrat">
              With a diameter roughly half that of Earth, Mars is a fascinating
              world with unique geology. Its surface is marked by vast plains,
              ancient canyons, and towering volcanoes, including Olympus Mons,
              the largest volcano in the solar system. Mars' polar ice caps,
              composed primarily of water ice and frozen carbon dioxide, expand
              and contract with the seasons, providing clues to the planet's
              climatic history.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Potential for Past Life</h3>
            <p className="font-montserrat">
              One of the most intriguing aspects of Mars is its potential to
              have harbored life in the past. Evidence of ancient riverbeds and
              lakes suggests that billions of years ago, Mars may have had a
              warmer, wetter climate, making it a promising place to search for
              signs of microbial life. Missions like NASA's Curiosity rover are
              painstakingly exploring the Martian surface in search of clues
              about the planet's past habitability.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h3 className="text-2xl">Future of Martian Exploration</h3>
            <p className="font-montserrat">
              The future of Mars exploration is exciting and promising. Planned
              missions, such as NASA's Perseverance rover and the joint ESA and
              Roscosmos mission, ExoMars, will continue to unveil the secrets of
              this enigmatic world. Additionally, there are ambitious plans to
              send crewed missions to Mars in the coming decades, which could
              mark the beginning of a new era in space exploration and perhaps
              bring us one step closer to answering the age-old question: Are we
              alone in the universe?
            </p>
          </section>
        </div>
      </article>
      <Sphere body={"mars"} size={0.266} rotSpeed={0.00103} clouds={false} />
    </section>
  );
}
