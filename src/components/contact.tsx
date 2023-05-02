import { CONTACTS } from "@/constants";

export default function Contact() {

  return (

    <section className="flex flex-col justify-center items-center space-y-20 h-screen" id="contact">
      <h2 className="text-3xl text-center">
         Feel free to reach out!
      </h2>

      {/* Mobile */}
      <div className="grid grid-cols-2 gap-20 md:hidden">
        {
          CONTACTS.map((contact, i) => (
            <a
              key={i}
              href={contact.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="text-6xl">
                { contact.icon }
              </span>
            </a>
          ))
        }
      </div>

      {/* Desktop */}
      <div className="hidden md:flex justify-center space-x-20">
        {
          CONTACTS.map((contact, i) => (
            <a
              key={i}
              href={contact.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <span className="text-6xl">
                { contact.icon }
              </span>
            </a>
          ))
        }
      </div>
    </section>
  ); 
}