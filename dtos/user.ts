export default interface IUser {
    id?:number,
    username:string,
    firstname:string,
    lastname:string,
    role?:string,
    email:string,
    image?:string,
    oldPassword?:string,
    password?:string,
    confirmedPassword?:string
}