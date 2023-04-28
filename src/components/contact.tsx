import { CONTACTS } from "@/constants";
import { SiGmail } from "react-icons/si";

export default function Contact() {

  return (

    <div className="flex flex-col justify-center space-y-20 h-screen" id="contact">
      <h1 className="text-4xl text-center">
         Feel free to reach out!
      </h1>

      <div className="flex justify-center space-x-20">

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
    </div>
  ); 
}