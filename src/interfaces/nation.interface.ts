import { PageInfo } from "./base.interface"

export interface INation {
    id: number
    name?: string,
}

export interface Nation {
    nationById: INation
}

export interface Nations {
    nations: {
        pageInfo: PageInfo,
        items: INation[]
    }
}
