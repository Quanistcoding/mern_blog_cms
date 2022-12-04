export default interface IPost {
    id?:number,
    categoryId:number,
    title:string | undefined,
    updatedAt?:Date,
    author:string | undefined,
    commentCount?:number,
    status:"published" | "draft",
    tags:string[] | undefined,
    image?:string,
    content:string,
    viewCount?:number
}