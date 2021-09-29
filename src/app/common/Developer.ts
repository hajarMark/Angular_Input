
import {Skill} from "./Skill";

export class Developer {
    lastName!:string;
    firstName!:string;
    age!:number;
    sexe!:string;
    bio!:string;
    skills!:Skill[];

    public constructor(lastName:string,firstName:string,age:number,sexe:string,bio:string,skills:Skill[]){
        this.lastName;
        this.firstName;
        this.age;
        this.sexe;
        this.bio;
        this.skills=skills;
    }
}