import { useEffect, useState } from "react";

import cvData from "./data/cv-data.json";

import "./App.css";
import SliderPage from "./components/Slider";

import Sidemenu from "./components/Sidemenu";
import { UsersActiveControls, UsersData } from "./share/interfaces";

interface formatterUser {
  [x: string]: UsersActiveControls;
}

function App() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth || 0);
  const [fixedMenu, setFixedMenu] = useState<boolean>(true);
  const [users, setUsers] = useState<formatterUser[]>();
  const [position, setPosition] = useState<number>(0);

  // Set  total size to main container  
  const setContainerSlideSize = (): number => {
    return Object.keys(cvData).length * screenSize;
  };

  const setActiveUser = (id: string): void => {
    const newArr = users?.map((user: formatterUser) => {
      const name: string = Object.keys(user)?.[0];
      const userD: UsersActiveControls = Object.values(user)?.[0];
      return { [name]: { ...userD, active: (id === name && true) || false } };
    });
    setUsers(newArr);
  };

 

  const handleClickLink = (id: string) => {
  
    const element = document.getElementById(`#${id}`)?.offsetLeft || 0;
    const scrollY = document.documentElement;

    setActiveUser(id);

    if (scrollY.scrollTop) { // Page scrolled down?
    
      // Page scroll to top and set position after scrolling to top
      window.scrollTo(10, 0); 
      document.addEventListener("scroll", () => {
        !scrollY.scrollTop && setPosition(element); 
      });
    } else {
      setPosition(element);
    }
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
      <div className={`w-[${screenSize}px] h-full `}>
        <div
          style={{
            left: `-${position}px`,
            transition: "all .8s ease",
          }}
          className=" transition9s w-screen flex transition-all relative"
        >
          {users?.map((user: formatterUser, index: number) => {
            return (
              <div
                key={index * Math.random() + 1}
                id={`#${Object.keys(user)?.[0]}`}
              >
                <SliderPage
                  fixed={fixedMenu}
                  data={Object.values(user)?.[0]?.data}
                />
              </div>
            );
          })}
        </div>
        {users?.length && (
          <Sidemenu handleClickLink={handleClickLink} users={users} />
        )}
      </div>
    </>
  );
}

export default App;
