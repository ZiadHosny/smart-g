type StatusProgress = {
    running: number,
    finished: number,
    new: number
}

export type Task = {
    id: string,
    name: string,
    status: 'Running' | 'Finished' | 'Queued' | 'New',
    creationDate: string,
    selectionCriteria: string[],
    operations: string[],
    statusProgress: StatusProgress
}