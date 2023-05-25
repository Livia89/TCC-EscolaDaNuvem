import { useEffect, useState } from "react";

import cvData from "./data/cv-data.json";

import "./App.css";
import SliderPage from "./components/Slider";

import Sidemenu from "./components/Sidemenu";
import { Users, UsersData } from "./share/interfaces";



function App() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth || 0);
  const [fixedMenu, setFixedMenu] = useState<boolean>(false);
  const [users, setUsers] = useState<Users[]>([]);

  
  const setContainerSlideSize = (): number => {
    return Object.keys(cvData).length * screenSize;
  };  

  
  useEffect(() => { 

     const usersArr: { id: string; data: UsersData; active: boolean }[] = Object.entries(cvData).map(
      ([name, user]: [name: string, user: UsersData]) => {   
        
        return { id: name, data: user, active: false }; 
      }
    ); 
 
    
    usersArr.length && setUsers(usersArr);   

    /* quando clicar vai deslizar aqui 
    document.getElementById("livia3")?.offsetLeft;
 */
    
     const scrollY = document.documentElement;
    const image = document.getElementById("livia3")
    document.addEventListener("scroll", () => {
     
      scrollY.scrollTop > 0 && setFixedMenu(true)
    });
  
    image?.addEventListener("mousemove", () => setFixedMenu(false)) 
 
    setScreenSize(setContainerSlideSize());
  }, []);


  return (
    <> {/*translate-x-[-0px]  transform*/ }
      <div className={`w-[${screenSize}px] transition-all flex`}>
        {users.length && users?.map((user: Users, index: number) => {

          return (
            <div className={`w-screen`} id={`${user.id}`}>
              <SliderPage fixed={fixedMenu} data={user.data} />
            </div>
          );
        })}
      </div> 
     
      {users.length && <Sidemenu {...users}/>}  
   
    </>
  );
}

export default App;
