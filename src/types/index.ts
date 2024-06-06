export interface Resume {
  name: string;
  title: string;
  address: string;
  about: string;
  objectives: string[];
  links: Link[];
  workExperiences: WorkExperience[];
  educations: Education[];
  additionalActivities: AdditionalActivity[];
  skills: Skill[];
}

export interface Link {
  id:
    | "maps"
    | "github"
    | "linkedin"
    | "youtube"
    | "x"
    | "instagram"
    | "facebook";
  name: string;
  url: string;
}

export interface WorkExperience {
  id: number;
  companyName: string;
  location: string;
  years: string;
  roles: string;
  jobDesc: string[];
  type: string;
}

export interface Education {
  id: number;
  title: string;
  schoolName: string;
  location: string;
  years: string;
}

export interface AdditionalActivity {
  type: string;
  activities: string[];
}

export interface Skill {
  type: string;
  tools: string[];
}
