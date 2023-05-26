/*
name: 
Profession
Dados Pessoais: 
About

SKILLS & EXPERTISE
word experience 
Education
Contacts 
*/

import { Education, UsersData, WorkExperience } from "../share/interfaces";
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
    education,
    workExperience,
    skills,
  } = {
    ...data,
  };

  return (
    <div className="p-8 bg-white ">
      <div className="mb-8">
        <button className="bg-[#140707] hover:bg-gray-100 hover:shadow hover:text-[#140707] text-white px-6 py-3 transition-colors ease ">
          Download CV
        </button>
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
            Cursei o nível 4 em Programação e nível 5 em Técnico Especialista em
            Programação e Sistemas de Informação. Conheci o serviço de cloud, o
            que me despertou muito interesse em aprender a implementar soluções
            de baixo custo e estratégias de migração de aplicações. Para isso
            almejo uma oportunidade para atuar na área de TI, com foco em Cloud.
          </div>

          <div>
            <Title title="Work Experience" color="#8ea69b" />
            {workExperience.map((each: WorkExperience, index: number) => (
              <div className="flex flex-col space-y-2 my-4"  key={index * Math.random()+1}>
                <div className="flex flex-col">
                  <b className="text-sm">{each.date}</b>
                  <b className="text-[15px]">{each.company}</b>
                </div>
                <span className="">{job}</span>
                <span className="">{each.location}</span>
              </div>
            ))}
          </div>

          <div>
            <Title title="Education" color="#8ea69b" />
            {education.map((each: Education, index: number) => (
              <div className="flex flex-col space-y-2 my-4" key={index * Math.random()+1}>
                <div className="flex flex-col">
                  <b className="text-sm">{each.date}</b>
                  <b className="text-[15px]">{each.name}</b>
                </div>
                <span className="">{each.level}</span>
                <span className="text-sm">{each.location}</span>
              </div>
            ))}
          </div>

          <div>
            <Title title="Skills & Expertise" color="#8ea69b" />
            <div className="flex-wrap">
              {skills.map((skill, index: number) => (
                <div className="inline-block" key={index * Math.random()+1}>
                  
                  <span className="text-sm ">{skill}</span>{" "}
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
