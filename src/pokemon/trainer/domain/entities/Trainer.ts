export interface Trainer{
    id:string;
    sex?: boolean;
    name:string;
    email:string;
    age?:number | undefined;
    city: string;
    region: string;
    birthDate?: Date | undefined;
}