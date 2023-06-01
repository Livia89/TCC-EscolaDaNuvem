import { useEffect, useState } from "react";
import cvData from "./data/cv-data.json";
import "./App.css";
import SliderPage from "./components/Slider";
import Sidemenu from "./components/Sidemenu";
import { UsersData, formatterUser } from "./share/interfaces";
import { Homepage } from "./components/Homepage";
import { Footer } from "./components/Footer";

function App() {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth || 0);
  const [users, setUsers] = useState<formatterUser[]>([]);
  const [positionX, setPositionX] = useState<number | null>(null);
  const [showSection, setShowSection] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<{
    homepage: boolean;
    curriculum: boolean;
  }>({
    homepage: true,
    curriculum: false,
  });

  // Set  total size to main container
  const setContainerSlideSize = (): number => {
    return Object.keys(cvData).length * screenSize;
  };

  const resetSections = () => {
    // just two sections
     return {
    homepage: false,
    curriculum: false
  }
  };


  const handleOnclickGoSection = (goto: string) => {
    
    setShowSection(false)
    const res = resetSections();
     res && setSelectedSection({...res, [goto]: true}) 
   
  };
  // Onclick on link sidemenu
  const handleClickLink = (id: string) => {
    const potitionElement = document.getElementById(`#${id}`)?.offsetLeft;
    const scrollY = window.scrollY;
    if (!scrollY) setPositionX(potitionElement || 0);
    // Page scroll to top and set position after scrolling to top
    window.scrollTo(0, 0);
    document.addEventListener("scroll", () => {
      !window.scrollY && setPositionX(potitionElement || 0);
    });
  };

  useEffect(() => {
    setShowSection(true)
  }, [selectedSection])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [showSection])

  useEffect(() => {
    /* load user data and created new object */
    const usersArr: { [x: string]: { data: UsersData; active: boolean } }[] =
      Object.entries(cvData).map(
        ([name, user]: [name: string, user: UsersData], index: number) => {
          return { [name]: { data: user, active: (!index && true) || false } };
        }
      );

    // restart position
    setPositionX(0);
    // Set main container size
    usersArr?.length && setUsers(usersArr);
    setScreenSize(setContainerSlideSize());
  }, []);

  return (
    <>
      <div className="">
        <div id="homepage" className={` transition-all ${!selectedSection.homepage && showSection && " hidden "}`}>
          <Homepage handleClick={handleOnclickGoSection} data={users} />
        </div>
        <div
          id="curriculum"
          className={` transition-all  ${!selectedSection.curriculum && showSection  && " hidden "}`}
        >
          <div className={`w-[${screenSize}px]  bg-white`}>
            <div className="overflow-x-hidden">
              <div
                style={{
                  left: `-${positionX}px`,
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
          <Sidemenu
            handleClickLink={handleClickLink}
            setUsers={setUsers}
            users={users}
            handleClickHomepage={handleOnclickGoSection}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
