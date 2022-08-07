import { faBriefcase, faGraduationCap, faPerson, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export enum TYPETASK {
  WORK = "WORK",
  PERSONAL = "PERSONAL",
  EDUCATION = "EDUCATION"
}

export interface IRouteIcon {
  title: TYPETASK,
  icon: IconDefinition,
}

export const routeIconType:IRouteIcon[] = [
  {
    title: TYPETASK.WORK,
    icon: faBriefcase
  },
  {
    title: TYPETASK.PERSONAL,
    icon: faPerson
  },
  {
    title: TYPETASK.EDUCATION,
    icon: faGraduationCap
  },
];