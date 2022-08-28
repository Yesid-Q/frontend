export interface PageInfo {
    count: number,
    countTotal: number,
    page: number,
    pageTotal: number,
    itemsPerPage: number
}

export interface PageParams {
    page: number,
    limit: number,
    search: string
}