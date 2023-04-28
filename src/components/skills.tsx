import { LANGUAGES, FRAMEWORKS, TOOLS } from "@/constants";

export default function Skills() {

  return (

    <div className="flex flex-col justify-center space-y-20 h-screen overflow-x-hidden" id="skills">
      
      <h1 className="text-4xl text-center">
        Here are some of what I currently know
      </h1>

      {/* Languages */}
      <div className="flex md:w-[200vw]">
        <div className="flex md:w-[100vw] w-[200vw] justify-around animate-carousel-initial">
          {
            LANGUAGES.map((language, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <span className="text-7xl">{ language.icon }</span>
                <span className="text-xl font-semibold">{ language.name }</span>
              </div>
            ))
          }
        </div>
        <div className="flex md:w-[100vw] justify-around animate-carousel-next">
          {
            LANGUAGES.map((language, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <span className="text-7xl">{ language.icon }</span>
                <span className="text-xl font-semibold">{ language.name }</span>
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
                <span className="text-xl font-semibold">{ framework.name }</span>
              </div>
            ))
          }
        </div>
        <div className="flex w-[100vw] justify-around animate-carousel-next-reverse">
          {
            FRAMEWORKS.map((framework, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <span className="text-7xl">{ framework.icon }</span>
                <span className="text-xl font-semibold">{ framework.name }</span>
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
                <span className="text-xl font-semibold">{ tool.name }</span>
              </div>
            ))
          }
        </div>
        <div className="flex w-[100vw] justify-around animate-carousel-next">
          {
            TOOLS.map((tool, i) => (
              <div key={i} className="flex flex-col items-center space-y-3">
                <span className="text-7xl">{ tool.icon }</span>
                <span className="text-xl font-semibold">{ tool.name }</span>
              </div>
            ))
          }
        </div>
      </div>


    </div>
  ); 
}

