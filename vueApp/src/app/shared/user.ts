export interface User {
    id?:number
    email: string,
    password: string,
    confirm: string,
    role?:number[]
    createdAt?:Date
    token?:string
    name:string
}
