
import { useState } from "react";
import CurriculumVitae from "./CurriculumVitae";
import Sidemenu from "./Sidemenu";
import { SidemenuData } from "../share/interfaces";
interface sidemenuProps{
  fixed?: boolean;
}

function SliderPage(props: sidemenuProps): React.ReactElement{
  const [sidebarMenu, setSideBarMenu] = useState<SidemenuData>();
  const [curriculumVitae, setCurriculumVitae] = useState<SidemenuData>();
  return (
    <div className="grid grid-cols-2 w-screen">
      <CurriculumVitae />
      <Sidemenu fixed={props.fixed} />
    </div>
  );
}

export default SliderPage;
