
import CurriculumVitae from "./CurriculumVitae";

import { UsersData } from "../share/interfaces";

import ImageSection from "./ImageSection";

interface sidemenuProps {
  data: UsersData;
  fixed?: boolean;
}

function SliderPage(props: sidemenuProps): React.ReactElement {
  const { data, fixed } = props;

/*   const [sidebarMenu, setSideBarMenu] = useState<SidemenuData>();
  const [curriculumVitae, setCurriculumVitae] = useState<SidemenuData>(); */
 
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 bg-[#8ea69b] flex flex-col-reverse sm:h-full w-screen">
      
        <CurriculumVitae data={data} />
       <ImageSection
          {...{
            id: data.name,
            socials: data.socials,
            fixed: fixed,
          }}
        />
      
       </div>
    
      
    </>
  );
}

export default SliderPage;
