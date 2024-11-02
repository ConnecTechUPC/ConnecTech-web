import { Category } from "./category.model";

export interface Event{
    id: number;
    name: string;
    ponente: string;
    day: string;
    hour: string;
    location: string;
    category: Category;
    sumary: string;
}