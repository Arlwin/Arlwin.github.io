
import { EXPERIENCES } from "@/constants";

export default function Experience() {

  return (

    <section className="flex flex-col justify-center h-screen" id="experience">
      
      <h2 className="text-3xl md:text-4xl text-center md:mb-28 mb-8">
        My journey so far
      </h2>

      {/* Mobile */}
      <div className="flex md:hidden flex-col-reverse">
        {
          EXPERIENCES.map((exp, i) => (
            <div 
              key={i}
              className="flex items-stretch space-x-5"
            >
              <div className="flex flex-col items-center">
                <span
                  className={`flex-grow bg-black ${i !== EXPERIENCES.length - 1 ? 'w-1': '' } `}
                />
                <span
                  className="border-black border-4 h-4 w-4 rounded-full cursor-pointer transition hover:bg-black hover:scale-110"
                />
                <span
                  className={`flex-grow bg-black ${i !== 0 ? 'w-1': '' } `}
                />
              </div>

              <div className="flex flex-col flex-grow py-3">
                <h4 className="text-md">
                  { exp.company } 
                </h4>
                <h3 className="text-lg font-semibold">
                  { exp.title }
                </h3>
                <h5 className="text-xs italic">
                  { exp.years }
                </h5>
                <p className="text-xs py-2">
                  { exp.description }
                </p>
              </div>
            </div>
          ))
        }
      </div>

      {/* Desktop */}
      <div className={`hidden md:grid grid-cols-4 h-[50%]`}>
        {
          EXPERIENCES.map((exp, i) => (
            <div 
              key={i} 
              className={`relative grid grid-rows-6 gap-y-2 h-[20%] items-stretch text-center`}
            >
              <h4 
                className="flex justify-center items-center text-xl font-semibold"
              >
                { exp.company }
              </h4>

              <div className="flex items-center">
                <span 
                  className={ `basis-1/2 ${i !== 0 ? 'bg-black h-1' : ''}` }
                />
                <span 
                  className="border-black border-2 h-4 w-4 rounded-full cursor-pointer transition hover:bg-black hover:scale-150" />
                <span 
                  className={ `basis-1/2 ${i !== EXPERIENCES.length - 1 ? 'bg-black h-1' : ''}` }
                />
              </div>

              <h5 className="text-xs italic">
                { exp.years }
              </h5>
              <h3 className="text-lg text-center font-semibold w-[50%] mx-auto">
                { exp.title }
              </h3>
              <p className="text-md text-start py-4 px-5 mt-4">
                { exp.description }
              </p>
            </div>
          ))
        }
      </div>
    </section>
  ); 
}