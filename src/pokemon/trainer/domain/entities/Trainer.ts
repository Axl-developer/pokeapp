export interface Trainer{
    id:string;
    name:string;
    email:string;
    age?:number | undefined;
    city: string;
    birthDate?: Date | undefined;
}