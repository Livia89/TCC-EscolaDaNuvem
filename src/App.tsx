import { useEffect, useState } from "react";
import cvData from "./data/cv-data.json";
import "./App.css";
import SliderPage from "./components/Slider";
import Sidemenu from "./components/Sidemenu";
import { UsersData, formatterUser } from "./share/interfaces";

function App() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth || 0);
  const [users, setUsers] = useState<formatterUser[]>([]);
  const [position, setPosition] = useState<number | null>(null);

  // Set  total size to main container
  const setContainerSlideSize = (): number => {
    return Object.keys(cvData).length * screenSize;
  };

/* 
  const returnActiveUser = (
    users: formatterUser[]
  ): formatterUser => {
    return users?.filter(
      (user: formatterUser) => Object.values(user)?.[0].active
    )?.[0];
  }; */

  // Onclick on link sidemenu
  const handleClickLink = (id: string)  => {
   const potitionElement = document.getElementById(`#${id}`)?.offsetLeft;
    const scrollY = window.scrollY;
    if(!scrollY) setPosition(potitionElement || 0);
    // Page scroll to top and set position after scrolling to top
    window.scrollTo(0, 0);
    document.addEventListener("scroll", () => {
      !window.scrollY && setPosition(potitionElement || 0);
    });

  };

  useEffect(() => {
    /* load user data and created new object */
    const usersArr: { [x: string]: { data: UsersData; active: boolean } }[] =
      Object.entries(cvData).map(
        ([name, user]: [name: string, user: UsersData], index: number) => {
          return { [name]: { data: user, active: (!index && true) || false } };
        }
      );
    // restart position
    setPosition(0);
    // Set main container size
    usersArr?.length && setUsers(usersArr);
    setScreenSize(setContainerSlideSize());
  }, []);

  //
  return (
    <>
      <div className={`w-[${screenSize}px]  bg-white`}>
        <div className="overflow-x-hidden">
          <div
            style={{
              left: `-${position}px`,
              transition: "all .8s ease",
            }}
            className=" w-screen flex transition-all relative"
          >
            {users?.map((user: formatterUser, index: number) => {
              return (
                <div
                  key={index * Math.random() + 1}
                  id={`#${Object.keys(user)?.[0]}`}
                 
                >
                  <SliderPage data={Object.values(user)?.[0]?.data} />
                </div>
              );
            })}

          </div>
        </div>
      </div>
      <Sidemenu handleClickLink={handleClickLink} setUsers={setUsers} users={users}/>

    </>
  );
}

export default App;
