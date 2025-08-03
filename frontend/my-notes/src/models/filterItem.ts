
export interface FilterItem {
    search: string,
    sortItem: string,
    sortOrder: string,
    pageSize: number,
    startSearchDate: Date | null,
    endSearchDate: Date | null
}