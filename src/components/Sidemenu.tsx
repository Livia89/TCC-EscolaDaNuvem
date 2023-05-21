// image url
// social midias
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import liviaImage from "../assets/livia.jpg";

import { 
  faLinkedin,
  faStackOverflow,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Sidemenu() {
  return (
    <div className="border p-8 bg-[#8ea69b] flex flex-col w-full items-center h-screen">
      <img
        src={liviaImage}
        className="rounded-full sm:mt-28 shadow "
        height={300}
        width={300}
      />

      <div className="my-6 space-x-4">
        <FontAwesomeIcon
          className="bg-white p-2 rounded-full"
          size={"lg"}
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          className="bg-white p-2 rounded-full"
          size={"lg"}
          icon={faStackOverflow}
        />
        <FontAwesomeIcon
          className="bg-white p-2 rounded-full"
          size={"lg"}
          icon={faInstagram}
        />
        <FontAwesomeIcon
          className="bg-white p-2 rounded-full"
          size={"lg"}
          icon={faGithub}
        />
      </div>

    
    </div>
  );
}

export default Sidemenu;
