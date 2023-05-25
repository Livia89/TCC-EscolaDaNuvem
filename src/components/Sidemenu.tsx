// image url
// social midias
import liviaImage from "../assets/livia.jpg";
import { Users } from "../share/interfaces";

function Sidemenu({ ...users }): React.ReactElement {
  
  return (
    <>
      <div className="flex flex-col fixed top-0 px-2 space-y-4 border-l-2 bottom-0 bg-slate-950 right-0 py-4 text-center">
        {Object.values(users).map((user: Users) => (
          <div>
            <a href={`#${user.id}`} className="text-sm ">
              <img
                id={user.id}
                src={liviaImage}
                className="rounded-full hover:scale-50 transition-all sm:mt-5 shadow mx-auto"
                height={50}
                width={50}
              />
              <span className="text-white text-sm ">{user.data.name.split(" ")[0]}</span>
            </a>
          </div>
        ))}
        
        
      </div>
    </>
  );
}

export default Sidemenu;
