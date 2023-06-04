export interface SidemenuData {
  imageUrl: string;
  socialMidias: [];
}

export interface PersonalData {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export interface Socials {
  linkedin?: string;
  github?: string;
  instagram?: string;
  stackoverflow?: string;
}

export interface WorkExperience {
  company: string; 
  date: string;
  location: string;
  
}

export interface Education {
  date: string;
  name: string;
  location: string;
  level: string;
}

export interface UsersData {
name: string;
phone: string;
email: string;
address: string;
job: string;
cvPath: string; 
image: string;
about: string;
socials: Socials;
workExperience: WorkExperience[]; 
education: Education[];
skills: string[];
}

export interface UsersActiveControls {
    data: UsersData;
    active: boolean;
}

export interface formatterUser {
  [x:string]: UsersActiveControls

}
