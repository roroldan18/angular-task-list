import { IRouteIcon, TYPETASK } from "./TypeTask";

export interface ITask {
  id?: number; // El ID es opcional
  text: string;
  day: string;
  type?: IRouteIcon['title'],
  reminder: boolean;
}