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

import Title from "./SectionTitle";

function CurriculumVitae() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <button className="bg-[#140707] hover:bg-gray-100 hover:shadow hover:text-[#140707] text-white px-6 py-3 transition-colors ease ">
          Download CV
        </button>
      </div>
      <div className="flex justify-center flex-col items-center transform  transition-all scroll-smooth">
        <div className="my-16 ">
          <div className="my-6">
            <h1 className="text-7xl font-cormorant font-bold">Lívia Gomes</h1>
            <h2 className="text-2xl font-light"> Front End Developer </h2>
          </div>
          <div className="flex flex-col justify-start w-full">
            <span>
              <b>Phone: </b> (+351) 9275-46995
            </span>
            <span>
              <b>Email: </b> liviapriscilla1989@gmail.com
            </span>
            <span>
              <b>Address: </b> Lisboa
            </span>
          </div>
        </div>

        <div>
          <Title title="consectetur adipiscing ultrices" color="#8ea69b"/>
          
          Sed placerat, turpis nec lobortis ultrices, velit turpis hendrerit
          risus, ut varius orci nisl tincidunt dui. Vivamus auctor magna ut
          semper porta. Praesent sodales mi tellus, sed interdum ligula
          porttitor id. Duis in erat metus. Phasellus efficitur laoreet arcu,
          vitae pellentesque turpis condimentum sed. Vivamus dui enim, euismod
          non gravida imperdiet, vulputate at massa. Sed tincidunt mattis metus
          aliquet finibus. Quisque suscipit quam id justo venenatis, in mollis
          ligula elementum. Suspendisse eleifend, lorem id dapibus blandit,
        </div>

        <div>
        <Title title="consectetur adipiscing" color="#8ea69b"/>
          Sed placerat, turpis nec lobortis ultrices, velit turpis hendrerit
          risus, ut varius orci nisl tincidunt dui. Vivamus auctor magna ut
          semper porta. Praesent sodales mi tellus, sed interdum ligula
          porttitor id. Duis in erat metus. Phasellus efficitur laoreet arcu,
          vitae pellentesque turpis condimentum sed. Vivamus dui enim, euismod
          non gravida imperdiet, vulputate at massa. Sed tincidunt mattis metus
          aliquet finibus. Quisque suscipit quam id justo venenatis, in mollis
          ligula elementum. Suspendisse eleifend, lorem id dapibus blandit,
        </div>

        <div>
          <Title title="consectetur adipiscing ultrices" color="#8ea69b"/>
          Sed placerat, turpis nec lobortis ultrices, velit turpis hendrerit
          risus, ut varius orci nisl tincidunt dui. Vivamus auctor magna ut
          semper porta. Praesent sodales mi tellus, sed interdum ligula
          porttitor id. Duis in erat metus. Phasellus efficitur laoreet arcu,
          vitae pellentesque turpis condimentum sed. Vivamus dui enim, euismod
          non gravida imperdiet, vulputate at massa. Sed tincidunt mattis metus
          aliquet finibus. Quisque suscipit quam id justo venenatis, in mollis
          ligula elementum. Suspendisse eleifend, lorem id dapibus blandit,
        </div>

        <div>
          <Title title="consectetur adipiscing" color="#8ea69b"/>
          Sed placerat, turpis nec lobortis ultrices, velit turpis hendrerit
          risus, ut varius orci nisl tincidunt dui. Vivamus auctor magna ut
          semper porta. Praesent sodales mi tellus, sed interdum ligula
          porttitor id. Duis in erat metus. Phasellus efficitur laoreet arcu,
          vitae pellentesque turpis condimentum sed. Vivamus dui enim, euismod
          non gravida imperdiet, vulputate at massa. Sed tincidunt mattis metus
          aliquet finibus. Quisque suscipit quam id justo venenatis, in mollis
          ligula elementum. Suspendisse eleifend, lorem id dapibus blandit,
        </div>

        <div>
          <Title title="consectetur adipiscing ultrices" color="#8ea69b"/>
          Sed placerat, turpis nec lobortis ultrices, velit turpis hendrerit
          risus, ut varius orci nisl tincidunt dui. Vivamus auctor magna ut
          semper porta. Praesent sodales mi tellus, sed interdum ligula
          porttitor id. Duis in erat metus. Phasellus efficitur laoreet arcu,
          vitae pellentesque turpis condimentum sed. Vivamus dui enim, euismod
          non gravida imperdiet, vulputate at massa. Sed tincidunt mattis metus
          aliquet finibus. Quisque suscipit quam id justo venenatis, in mollis
          ligula elementum. Suspendisse eleifend, lorem id dapibus blandit,
        </div>
      </div>
    </div>
  );
}

export default CurriculumVitae;
