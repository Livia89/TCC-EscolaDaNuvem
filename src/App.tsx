import { useEffect, useState } from "react";

import cvData from "./data/cv-data.json";

import "./App.css";
import SliderPage from "./components/Slider";

import Sidemenu from "./components/Sidemenu";
import { Users, UsersData } from "./share/interfaces";

interface formatterUser {
  [x:string]: Users

}

function App() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth || 0);
  const [fixedMenu, setFixedMenu] = useState<boolean>(false);
  const [users, setUsers] = useState<formatterUser[]>();

  
  const setContainerSlideSize = (): number => {
    return Object.keys(cvData).length * screenSize;
  };  

  const handleClickLink = (id: string) => {
    /* 
    const oi = users.map(e => setUsers()).filter((usr:Users) => usr.);
     */
    /* userClicked && setUsers([{...userClicked, active: true}, ...users ]);   */
    
  }

  
  useEffect(() => { 
    /* load user data and created new object */ 
     const usersArr: {[x: string]: { data: UsersData; active: boolean }}[] = Object.entries(cvData).map(
      ([name, user]: [name: string, user: UsersData]) => {    
        
        return {[name]: { data: user, active: false }}; 
      }
    )  
      console.log(usersArr);
 usersArr?.length && setUsers(usersArr);    

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
        
   {Object.values({...users})?.map((user, index:number) => {
          /* REVER ISSO AQUI */ 
          return (
            <div className={`w-screen`} key={index * Math.random()+1}>
           <SliderPage fixed={fixedMenu} data={Object.values(user)?.[0]?.data} /> 
            </div>
          );
        })} 
      </div> 
      {/* {users.length && <Sidemenu handleClickLink={handleClickLink} users={users}/>}   */}
    </>
  );
}

export default App;
