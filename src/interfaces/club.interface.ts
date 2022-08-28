import { PageInfo } from "./base.interface"

export interface IClub {
    id: number
    name?: string,
}

export interface Club {
    clubById: IClub
}

export interface Clubs {
    clubs: {
        pageInfo: PageInfo,
        items: IClub[]
    }
}

