import { useState } from "react";
import Sidemenu from "./components/Sidemenu";
import Slider from "react-slick";
import liviaImage from "./assets/livia.jpg";

import CurriculumVitae from "./components/CurriculumVitae";
import { sidemenuData } from "./share/interfaces";

import cvData from "./data/cv-data.json";

import "./App.css";

function App() {
  const [sidebarMenu, setSideBarMenu] = useState<sidemenuData>();
  const [curriculumVitae, setCurriculumVitae] = useState<sidemenuData>();

  console.log(cvData);

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className=" overflow-hidden w-screen">
        <div className="w-[5000px]">
          <div className="flex flex-col ">
            <div className="flex transition w-screen">
              <div className="sm:w-3/6">
                <CurriculumVitae />
              </div>
              <div className={`sm:w-3/6 right-0 bottom-0 top-0`}>
                <Sidemenu />
              </div>
            </div>
            <div className="flex transition w-screen ">
              <div className="sm:w-3/6">
                <CurriculumVitae />
              </div>
              <div className={`sm:w-3/6 right-0 bottom-0 top-0`}>
                <Sidemenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*     <div className="flex fixed space-x-4 right-2 -top-28">
        <div>
          <img
            src={liviaImage}
            className="rounded-full hover:scale-50 transition-all sm:mt-28 shadow"
            height={50}
            width={50}
          />
          Joaquina
        </div>
        <div>
          <img
            src={liviaImage}
            className="rounded-full hover:scale-50 transition-all sm:mt-28 shadow"
            height={50}
            width={50}
          />
          Francisca
        </div>
      </div>
    
 */}
    </>
  );
}

export default App;
