import { LANGUAGES, FRAMEWORKS, TOOLS } from "@/constants";

export default function Skills() {

  return (

    <section className="flex flex-col justify-center space-y-10 md:space-y-20 h-screen md:overflow-x-hidden" id="skills">
      
      <h2 className="text-3xl md:text-4xl text-center">
        Here are some of what I currently know
      </h2>

      {/* Mobile */}
      <div className="md:hidden grid grid-cols-4 gap-x-5 gap-y-7">
        {
          [...LANGUAGES, ...FRAMEWORKS, ...TOOLS].map((skill, i) => (
            <div key={i} className="flex flex-col items-center space-y-3 hover:animate-[pulse_.5s_ease-out_3]">
              <span className="text-5xl">{ skill.icon }</span>
              <h4 className="text-md font-semibold text-center">{ skill.name }</h4>
          </div>
          ))
        }
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col space-y-20">
        {/* Languages */}
        <div className="flex w-[200vw]">
          <div className="flex w-[100vw] justify-around animate-carousel-initial">
            {
              LANGUAGES.map((language, i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <span className="text-7xl">{ language.icon }</span>
                  <h4 className="text-xl font-semibold">{ language.name }</h4>
                </div>
              ))
            }
          </div>
          <div className="flex w-[100vw] justify-around animate-carousel-next">
            {
              LANGUAGES.map((language, i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <span className="text-7xl">{ language.icon }</span>
                  <h4 className="text-xl font-semibold">{ language.name }</h4>
                </div>
              ))
            }
          </div>
        </div>

        {/* Frameworks */}
        <div className="flex w-[200vw]">
          <div className="flex w-[100vw] justify-around animate-carousel-initial-reverse">
            {
              FRAMEWORKS.map((framework, i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <span className="text-7xl">{ framework.icon }</span>
                  <h4 className="text-xl font-semibold">{ framework.name }</h4>
                </div>
              ))
            }
          </div>
          <div className="flex w-[100vw] justify-around animate-carousel-next-reverse">
            {
              FRAMEWORKS.map((framework, i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <span className="text-7xl">{ framework.icon }</span>
                  <h4 className="text-xl font-semibold">{ framework.name }</h4>
                </div>
              ))
            }
          </div>
        </div>

        {/* Tools */}
        <div className="flex w-[200vw]">
          <div className="flex w-[100vw] justify-around animate-carousel-initial">
            {
              TOOLS.map((tool, i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <span className="text-7xl">{ tool.icon }</span>
                  <h4 className="text-xl font-semibold">{ tool.name }</h4>
                </div>
              ))
            }
          </div>
          <div className="flex w-[100vw] justify-around animate-carousel-next">
            {
              TOOLS.map((tool, i) => (
                <div key={i} className="flex flex-col items-center space-y-3">
                  <span className="text-7xl">{ tool.icon }</span>
                  <h4 className="text-xl font-semibold">{ tool.name }</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  ); 
}

