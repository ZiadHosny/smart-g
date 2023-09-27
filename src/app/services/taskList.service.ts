import { Injectable } from '@angular/core';
import { TASKS } from 'src/utils/tasks';
import { Task } from 'src/utils/types';

@Injectable()
export class taskListService {
    constructor() { }

    getTasks(): Task[] {
        return [
            ...TASKS,
            ...TASKS.map((e) => ({ ...e, name: `${e.name} 2` })),
            ...TASKS.map((e) => ({ ...e, name: `${e.name} 3` })),
            ...TASKS.map((e) => ({ ...e, name: `${e.name} 4` }))
        ];
    }

}