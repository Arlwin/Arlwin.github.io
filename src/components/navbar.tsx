import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { HiMenu } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

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

  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => setActiveTab(tabIndex), [tabIndex]);

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="fixed top-0 flex justify-between items-center w-[100%] px-10 md:px-48 py-2 md:py-5 bg-white z-10">
      <h1 className="text-4xl font-extrabold">A</h1>

      <div className="md:hidden">
        <span onClick={() => setOpenSidebar(true)}>
          <HiMenu className="text-3xl"/>
        </span>

        <div className={ `${openSidebar ? 'fixed' : 'hidden'} transition top-0 right-0 w-[40%] h-screen rounded-l-md drop-shadow-xl bg-white flex flex-col py-3 items-stretch` } >
          <span
            className="self-end mb-6 px-4"
            onClick={() => setOpenSidebar(false)}
          >
            <MdClose className="text-3xl"/>
          </span>
          {
            tabs.map((tab, i) => 
            <span
              key={i}
              className={ `px-4 py-3 text-center ${i === activeTab ? 'bg-black text-white' : ''}` }
            >
              <a 
                onClick={() => setActiveTab(i)}
                href={`#${tab.toLowerCase()}`}
              >
                {tab}
              </a>
            </span>
            )
}
        </div>

      </div>

      <div className="hidden md:flex md:space-x-10 text-lg font-semibold">
        
        { 
          tabs.map((tab, i) => 
            <a 
              onClick={() => setActiveTab(i)}
              key={i} 
              href={`#${tab.toLowerCase()}`}
              className={ i === activeTab ? 'border-b-2 border-black' : '' }
            >
              {tab}
            </a>) 
        }

      </div>
    </div>
  );
}