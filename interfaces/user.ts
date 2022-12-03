export default interface User {
    id?:number,
    username:string,
    firstname:string,
    lastname:string,
    role?:string,
    email:string,
    image?:string,
    password?:string,
    confirmedPassword?:string
}