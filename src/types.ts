type StatusProgress = {
    running: number,
    finished: number,
    new: number
}

export type Task = {
    id: string,
    name: string,
    status: string,
    creationDate: string,
    selectionCriteria: string[],
    Operations: string[],
    statusProgress: StatusProgress[]
}