// image url
// social midias
import liviaImage from "../assets/livia.jpg";
import { Users, UsersData } from "../share/interfaces";

function Sidemenu({...linkId}): React.ReactElement {
  
  /* const {name} = {...linkId}; */
  
 
  return (
    <>
      <div className="flex flex-col fixed top-0 px-2 border-l-2 bottom-0 bg-slate-950 right-0 ">
        <div>
          <a href="#livia3" className="text-sm">
            <img
              id="livia3"
              src={liviaImage}
              className="rounded-full hover:scale-50 transition-all sm:mt-5 shadow mx-auto"
              height={50}
              width={50}
            />
            <span className="text-white text-sm ">Joaquina</span>
          </a>
        </div>
        <div>
          <a href="#livia1">
            <img
              src={liviaImage}
              className="rounded-full hover:scale-50 transition-all sm:mt-5 shadow mx-auto"
              height={50}
              width={50}
            />
          </a>
          <span className="text-white text-sm ">Francisca</span>
        </div>
      </div>
    </>
  );
}

export default Sidemenu;
