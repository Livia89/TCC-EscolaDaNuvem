// image url
// social midias
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import liviaImage from "../assets/livia.jpg";
import { Users } from "../share/interfaces";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface SidemenuProps{
  handleClickLink: (id: string) => void;
  users: Users[];

}

function Sidemenu(props: SidemenuProps ): React.ReactElement {
  const { handleClickLink, users } = {...props};
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <>
      <div className={`flex flex-col px-2 space-y-4 border-l-2  bg-slate-950 py-4 text-center fixed bottom-0 right-0 top-0 transform lg:transform-none ${!openMenu && " translate-x-full "}   transition-transform `}>
      <div className="lg:hidden block  relative top-0 -right-5 cursor-pointer" onClick={() => setOpenMenu(false)}>
          <span className="text-white text-sm">
            <FontAwesomeIcon icon={faArrowRight} color="white" size={"2xl"} />
          </span>
        </div>
        {Object.values(users)?.map((user: Users, index: number) => (
          <div key={index * Math.random() + 1} className={`${user.active && "border-4 border-white"}`} onClick={() => handleClickLink(Object.keys(user)?.[0])}>
            <a href={`#${Object.keys(user)?.[0]}`} className="text-sm ">
              <img
                
                src={liviaImage}
                className="rounded-full hover:scale-50 transition-all sm:mt-5 shadow mx-auto"
                height={50}
                width={50}
              />
              <span className="text-white text-sm ">
                {user.data.name.split(" ")[0]}
              </span>
            </a>
          </div>
        ))}
        
      {!openMenu &&  <div className="lg:hidden block fixed top-3 right-28 cursor-pointer shadow-xl " onClick={() => setOpenMenu(true)}>
          <span className="text-black text-sm bg-white p-3 rounded border border-[#96a69b]">
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </span>
        </div>}
      </div>
    </>
  );
}

export default Sidemenu;
