import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UsersActiveControls, formatterUser } from "../share/interfaces";
import { faArrowRight, faBars, faHome } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction, useState } from "react";

interface SidemenuProps {
  handleClickLink: (id:string) => void;
  users: formatterUser[];
  setUsers: Dispatch<SetStateAction<formatterUser[]>>
  handleClickHomepage: (name: string) => void
}

function Sidemenu(props: SidemenuProps): React.ReactElement {
  const { handleClickLink, users, setUsers, handleClickHomepage } = { ...props };
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const isMobile = window.innerWidth;

  const handleClickOptMenu = (id: string) => {
    isMobile < 1024 && setOpenMenu(false)
    setActiveUser(id);
    handleClickLink(id)
  }

  const setActiveUser = (id: string) => {
    const newArr:formatterUser[] = users?.map((user: formatterUser) => {
      const name: string = Object.keys(user)?.[0];
      const userD: UsersActiveControls = Object.values(user)?.[0];
      return { [name]: { ...userD, active: (id === name && true) || false } };
    });
    setUsers(newArr);
    
  };
  return (
    <>
      <div
        className={`flex flex-col px-2 space-y-4 border-l-2  bg-slate-950 py-4 text-center fixed bottom-0 right-0 top-0 transform ${
          !openMenu && " translate-x-full "
        }   transition-transform `}
      >
        <div
          className="relative top-0 -right-5 cursor-pointer "
          onClick={() => setOpenMenu(false)}
        >
          <span className="text-white text-sm">
            <FontAwesomeIcon icon={faArrowRight} color="white" size={"2xl"} />
          </span>
        </div>
      <div className="h-full">
      {users?.map((user: formatterUser, index: number) => {
          const name:string = Object.keys(user)?.[0];
          const userValues:UsersActiveControls = Object.values(user)?.[0];
          return   <div
          key={index * Math.random() + 1}
          className={` my-6 ${
            userValues.active && " pointer-events-none " || "cursor-pointer"
          }`}
          onClick={() => handleClickOptMenu(name)}
        >
            <img
              src={image}
              className={`rounded-full transition-all shadow mx-auto ${
                userValues.active &&
                " border-2 border-white opacity-50"
              }`}
              height={50}
              width={50}
            />
            <span className="text-white text-sm">
              {userValues.data.name.split(" ")[0]}
            </span>
        </div>
        })}
      </div>
        
        {!openMenu && (
          <div
            className="fixed top-3 right-32 cursor-pointer shadow-xl "
            onClick={() => setOpenMenu(true)}
          >
            <span className="text-black text-sm bg-white p-3 rounded border border-[#96a69b]">
              <FontAwesomeIcon icon={faBars} size="2xl" />
            </span>
          </div>
        )}
        <div onClick={() => handleClickHomepage("homepage")} className="text-white flex flex-col items-center space-y-1 cursor-pointer">
          <FontAwesomeIcon size="xl" icon={faHome}/>
          <span className="text-sm">Home</span>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
