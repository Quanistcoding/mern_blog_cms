export default interface IUser {
    id?:number,
    username:string,
    firstname:string,
    lastname:string,
    role?:"administrator" | "subsctiber" | "reader",
    email:string,
    image?:string,
    oldPassword?:string,
    password?:string,
    confirmedPassword?:string
}