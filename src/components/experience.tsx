
import { EXPERIENCES } from "@/constants";

export default function Experience() {

  return (

    <div className="flex flex-col justify-center h-screen" id="experience">
      <h1 className="text-4xl text-center mb-28">
        My journey so far
      </h1>

      <div className={`grid grid-cols-4 h-[50%]`}>
        {
          EXPERIENCES.map((exp, i) => (
            <div 
              key={i} 
              className={`relative grid grid-rows-6 gap-y-2 h-[20%] items-stretch text-center`}
            >
              <span 
                className="flex justify-center items-center text-xl font-semibold"
              >
                { exp.company }
              </span>

              <div className="flex items-center">
                <span 
                  className={ `basis-1/2 ${i !== 0 ? 'bg-black h-1' : ''}` }
                />
                <span 
                  className="border-black border-2 h-4 w-4 rounded-full cursor-pointer transition hover:bg-black hover:scale-150" />
                <span 
                  className={ `basis-1/2 ${i !== EXPERIENCES.length - 1 ? 'bg-black h-1' : ''}` }
                />
                
                { 
                // ( i === EXPERIENCES.length - 1) && 
                // <span 
                //   className="absolute right-0 border-r-4 border-t-4 border-black h-5 w-5 animate-move-right"
                // /> 
                }
              </div>

              <span className="text-xs italic">{ exp.years }</span>
              <span className="text-lg text-center font-semibold w-[50%] mx-auto">
                { exp.title }
              </span>
              <p className="text-md text-start py-4 px-5 mt-4">
                { exp.description }
              </p>
            </div>
          ))
        }
      </div>
    </div>
  ); 
}