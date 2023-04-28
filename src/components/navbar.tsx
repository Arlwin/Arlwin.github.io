import { useState } from "react";
import { useRouter } from 'next/router'

export default function Navbar() {

  const router = useRouter();

  const tabs = [
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Contact',
  ];

  const path = router.asPath;
  const anchorIndex = path.indexOf('#');

  let tabIndex = 0;
  if (anchorIndex >= 0) {

    const anchor = path.substring(anchorIndex + 1, path.length);
    tabIndex = tabs.findIndex((tab) => tab.toLowerCase() === anchor);
  } 

  const [activeTab, setActiveTab] = useState(tabIndex);

  const activeClass = "border-b-2 border-black";

  return (
    <div className="fixed top-0 flex justify-between items-center w-[100%] px-48 py-5 bg-white z-10">
      <h1 className="text-4xl font-extrabold">A</h1>

      <div className="flex space-x-10 text-lg font-semibold">
        
        { 
          tabs.map((tab, i) => 
            <a 
              onClick={() => setActiveTab(i)}
              key={i} 
              href={`#${tab.toLowerCase()}`}
              className={ i === activeTab ? activeClass : '' }
            >
              {tab}
            </a>) 
        }

      </div>
    </div>
  );
}