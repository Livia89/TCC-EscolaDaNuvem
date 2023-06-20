import { Certification, Education, UsersData, WorkExperience } from "../share/interfaces";
import Title from "./SectionTitle";
interface CVProps {
  data: UsersData;
}
function CurriculumVitae({ data }: CVProps): React.ReactElement {
  const {
    name,
    phone,
    job,
    email,
    address,
    about,
    certification, 
    education,
    workExperience,
    skills,
  } = {
    ...data,
  };

  return (
    <div className="p-8 bg-white h-full">
      <div className="mb-8">

        <a
          href={'#'}
          target="_blank"
          className="bg-[#140707] hover:bg-gray-100 hover:shadow hover:text-[#140707] text-white px-6 py-3 transition-colors ease "
        >
          Download CV
        </a>
      </div>
      <div className="flex justify-center flex-col items-center transform  transition-all scroll-smooth">
        <div className="my-16 ">
          <div className="my-6">
            <h1 className="text-7xl font-cormorant font-bold">{name}</h1>
            <h2 className="text-2xl font-light"> {job} </h2>
          </div>
          <div className="flex flex-col justify-start w-full">
            <span>
              <b>Phone: </b> {phone}
            </span>
            <span>
              <b>Email: </b> {email}
            </span>
            <span>
              <b>Address: </b> {address}
            </span>
          </div>
        </div>
        <div className="xl:px-20 space-y-16">
          <div>
            <Title title="About" color="#8ea69b" />
            {about}
          </div>

          <div>
            <Title title="Experiência" color="#8ea69b" />
            {workExperience.map((each: WorkExperience, index: number) => (
              <div
                className="flex flex-col space-y-2 my-4"
                key={index * Math.random() + 1}
              >
                <div className="flex flex-col">
                  {/* <b className="text-sm">{each.date}</b> */}
                  <b className="text-[15px]">{each.company}</b>
                </div>
                <span>{each.occupation}</span>
                <span className="text-sm">{each.location}</span>
                
              </div>
            ))}
          </div>
          <div>
            <Title title="Educação" color="#8ea69b" />
            {education.map((each: Education, index: number) => (
              <div
                className="flex flex-col space-y-2 my-4"
                key={index * Math.random() + 1}
              >
                <div className="flex flex-col">
                  {/* <b className="text-sm">{each.date}</b> */}
                  <b className="text-[15px]">{each.name}</b>
                </div>
                <span className="">{each.level}</span>
                <span className="text-sm">{each.location}</span>
              </div>
            ))}
          </div>
          <div>
            <Title title="Cursos e Certificações" color="#8ea69b" />
            {certification.map((cert: Certification, index: number) => (
              <div
                className="flex flex-col space-y-2 my-4"
                key={index * Math.random() + 1}
              >
                <div className="flex flex-col">
                  <b className="text-[15px]">{cert.name}</b>
                <span className="text-sm">{cert.location}</span>
                </div>
                
              </div>
            ))}
          </div>
          <div>
            <Title title="Habilidades e Especialidades" color="#8ea69b" />
            <div className="flex-wrap">
              {skills.map((skill, index: number) => (
                <div className="inline-block" key={index * Math.random() + 1}>
                  <span className="text-sm ">{skill}</span>
                  {index !== skills.length - 1 && (
                    <span className="mx-2">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  );
}
export default CurriculumVitae;
