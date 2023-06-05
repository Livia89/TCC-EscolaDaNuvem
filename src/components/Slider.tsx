import CurriculumVitae from "./CurriculumVitae";

import { UsersData } from "../share/interfaces";

import ImageSection from "./ImageSection";

interface sidemenuProps {
  data: UsersData;
}

function SliderPage(props: sidemenuProps): React.ReactElement {
  const { data } = props;

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 bg-[#005276db] flex flex-col-reverse lg:h-full w-screen">
        <CurriculumVitae data={data} />
        <ImageSection
          {...{
            id: data.name,
            socials: data.socials,
            image: data.image,
          }}
        />
      </div>
    </>
  );
}

export default SliderPage;
