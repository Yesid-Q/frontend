import { PageInfo } from './base.interface'
import { IClub } from './club.interface'
import { INation } from './nation.interface'

export interface IPlayer {
    id: number
    name: string
    position: string
    nation: INation
    club: IClub
}

export interface Player {
    playerById: IPlayer
}

export interface Players {
    players : {
        pageInfo: PageInfo,
        items: IPlayer[]
    }
}
