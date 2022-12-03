export default interface User {
    id?:number,
    username:string,
    firstname:string,
    lastname:string,
    role?:string,
    email:string,
    password?:string,
    confirmedPassword?:string
}