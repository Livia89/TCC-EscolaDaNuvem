import { useEffect, useState } from "react";

import cvData from "./data/cv-data.json";

import "./App.css";
import SliderPage from "./components/Slider";

import Sidemenu from "./components/Sidemenu";
import { UsersActiveControls, UsersData } from "./share/interfaces";

interface formatterUser {
  [x:string]: UsersActiveControls

}

function App() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth || 0);
  const [fixedMenu, setFixedMenu] = useState<boolean>(true);
  const [users, setUsers] = useState<formatterUser[]>();

  const setContainerSlideSize = (): number => {
    return Object.keys(cvData).length * screenSize;
  };
  
  const setActiveUser = (id: string):void => {    
    const newArr = users?.map((user: formatterUser) => {
      const name: string = Object.keys(user)?.[0];
      const userD:UsersActiveControls = Object.values(user)?.[0];
      return {[name]: {...userD, active: id === name && true || false}}
    })
    setUsers(newArr)
  }

  const handleClickLink = (id: string) => {
    setActiveUser(id);
    

   
    window.scrollTo(10, 0);
    setFixedMenu(false)
    document.getElementById(id)?.offsetLeft;
  
       //  quando clicar vai deslizar aqui 
   /*  document.getElementById("livia3")?.offsetLeft;
 
    
     const scrollY = document.documentElement;
    const image = document.getElementById("livia3")
    document.addEventListener("scroll", () => {
     
      scrollY.scrollTop > 0 && setFixedMenu(true)
    });
  
    image?.addEventListener("mousemove", () => setFixedMenu(false)) 
 
 */

    
  }

  
  useEffect(() => { 
    /* load user data and created new object */ 
     const usersArr: {[x: string]: { data: UsersData; active: boolean }}[] = Object.entries(cvData).map(
      ([name, user]: [name: string, user: UsersData]) => {     
        return {[name]: { data: user, active: false }};  
      }
    )  

    
 usersArr?.length && setUsers(usersArr);    
    setScreenSize(setContainerSlideSize());
  }, []); 
  

  return (
    <> {/*translate-x-[-0px]  transform*/ }
      <div className={`w-[${screenSize}px] transition-all flex`}>
        
   {users?.map((user:formatterUser, index:number) => {
          return (
            <div className={`w-screen`} key={index * Math.random()+1}>
           <SliderPage fixed={fixedMenu} data={Object.values(user)?.[0]?.data} /> 
            </div>
          );
        })} 
      </div> 
      {users?.length && <Sidemenu handleClickLink={handleClickLink} users={users}/>}  
    </>
  );
}

export default App;
