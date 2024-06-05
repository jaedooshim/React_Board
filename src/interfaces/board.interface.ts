export interface ICreateBoard {
    title : string
    description : string
}

export interface IUpdateBoard {
    id : number
    title? : string
    description ? : string
    nickname? : string
}