import cloudBanner from "../assets/cloud/cloud2.gif";
import cloudComputing from "../assets/cloud/section.gif";
import { UsersActiveControls, formatterUser } from "../share/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubesStacked, faGaugeHigh, faGlobe, faHandHoldingDollar, faPeopleRoof, faPiggyBank } from "@fortawesome/free-solid-svg-icons";

interface HomepageProps {
  data?: formatterUser[];
  handleClick: (name: string) => void
}

export const Homepage = ({ data, handleClick }: HomepageProps) => {
  return (
    <>
      <main className={`flex flex-col items-center justify-between gradient-home space-y-4 lg:space-y-12 bg-white z-10 relative`}>
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse md:space-x-4 w-full items-center justify-center md:mx-6 md:h-3/6   p-4 shadow">
          <div className="text-center relative mb-8 sm:mb-0">
            <h1 className="font-bold  ">
              <span className="text-[#ff9900] animate-pulse font-extrabold"> AWS - </span>
              Amazon Web Services
            </h1>
            <p className=" text-3xl font-cormorant uppercase font-semibold tracking-widest z-50 relative">Escola da Nuvem </p>
            <p className="mt-4 mb-5 font-[17px]">
              Trabalho de conclusão de curso e apresentação de Curriculum Vitae
            </p>
            <div className="flex justify-center">    
                <button
                id='verCurriculum'
                  className={`ease-in-out transition-all  rounded  py-4 px-6 text-white flex justify-center items-center bg-[#ff9900]`}
                  onClick={() => handleClick("curriculum")}
                >
                  Ver Curriculum Vitae
                </button>
            
            </div>
          </div>

          <div className="-top-2 mb-8 sm:mb-0 sm:-top-0">
            <img
              className="img-fluid mx-auto rounded p-6"
              width={700}
              height={700}
              src={cloudBanner}
            />
          </div>
        </div>
        <div>
          <h1 className="text-4xl text-center font-bold font-cormorant">Alunos</h1>
          <div className="sm:flex justify-center">
            {data &&
              data?.map((user: formatterUser, index: number) => {
                const userValues: UsersActiveControls =
                  Object.values(user)?.[0];

                return (
                  <div
                    className="md:flex md:space-x-4 max-w-screen-lg m-auto"
                    key={index + Math.random() * 0.1}
                  >
                    <div className="block max-w-sm p-6 space-y-2 bg-white rounded-lg  m-auto scale-[0.95] hover:scale-[1] transition-all">
                      <img
                        width="200"
                        height="80"
                        className="rounded-full m-auto shadow-inner  "
                        src={`${userValues.data.image}`}
                      />
                      <h5 className="mb-2 text-center tracking-tight text-gray-900 dark:text-white">
                        {`${userValues.data.name}`}
                      </h5>
                    </div>
                  </div>
                );
              })}
              
          </div>
          <div className="flex justify-center">    
                <button
                id='verCurriculum'
                  className={`ease-in-out transition-all  rounded  py-4 px-6 text-white flex justify-center items-center bg-[#ff9900]`}
                  onClick={() => handleClick("curriculum")}
                >
                  Ver Curriculum Vitae
                </button>
            
            </div>
          
        </div>
     
        <section className=" w-full bg-[#f2f2f2] ">
        <h2 className="p-4 bg-[#005276] w-full text-center text-white font-cormorant  text-3xl">As Vantanges da Nuvem</h2>

          <div className="lg:grid grid-cols-2 items-center px-4">

        <img
            className="img-fluid rounded p-6 mx-auto"
            width={600}
            height={600}
            src={cloudComputing}
            />
        
        <div className="xl:text-[25px] font-extralight xl:p-0 p-6 sm:text-[20px]">
        <div className="space-x-4 flex items-center justify-center lg:justify-normal"><FontAwesomeIcon size="sm" color="#9c1620" icon={faHandHoldingDollar}/><span> Pagamento conforme o uso</span></div>
        <div className="space-x-4 flex items-center justify-center lg:justify-normal"><FontAwesomeIcon size="sm" color="#9c1620" icon={faPeopleRoof}/><span>Beneficiar-se de economia massiva de escala</span></div>
        <div className="space-x-4 flex items-center justify-center lg:justify-normal"><FontAwesomeIcon size="sm" color="#9c1620" icon={faGaugeHigh}/><span>Aumentar a velocidade e a agilidade</span></div>
        <div className="space-x-4 flex items-center justify-center lg:justify-normal"><FontAwesomeIcon size="sm" color="#9c1620" icon={faCubesStacked}/><span>Parar de adivinhar a capacidade</span></div>
        <div className="space-x-4 flex items-center justify-center lg:justify-normal"><FontAwesomeIcon size="sm" color="#9c1620" icon={faGlobe}/><span>Obtenha alcance global em minutos</span></div>
        <div className="space-x-4 flex items-center justify-center lg:justify-normal"><FontAwesomeIcon size="sm" color="#9c1620" icon={faPiggyBank}/><span>Realize economia de custos</span></div>
        </div>
            </div>
        </section>
      </main>
    
    </>
  );
};
