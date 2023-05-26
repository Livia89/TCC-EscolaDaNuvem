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
import { Socials } from "../share/interfaces";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { SocialName } from "../share/enums";

interface SectionImageProps{
  id: string;
  socials: Socials;
  fixed?: boolean;
}
function ImageSection(props: SectionImageProps): React.ReactElement{
  const {fixed, socials } = {...props}; 
  return (
    <div className={`p-8 flex flex-col   items-center lg:h-full`}>
    
      <div className={`text-center ${fixed && " lg:fixed top-1"}`}>

      <img
        src={liviaImage}
        className={`rounded-full lg:mt-28 shadow  `}
        height={300}
        width={300}
        />
  
      <div className="my-6 space-x-4 ">
        
      {Object.entries(socials).map(([socialName, socialLink], index: number) => {
        
        return socialName.length && <a href={socialLink}  key={index * Math.random()+1}>
          <FontAwesomeIcon
         
          className="bg-white p-2 rounded-full"
          size={"lg"}
          icon={socialName === SocialName.github && faGithub 
            || socialName === SocialName.stackoverflow && faStackOverflow 
            || socialName === SocialName.instagram && faInstagram 
            || socialName === SocialName.linkedin && faLinkedin 
            || faExclamation }
        />
        </a>
      })}
    
      </div>
        </div>
    </div>
  );
}

export default ImageSection;
