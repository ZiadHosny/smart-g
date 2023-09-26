import { Injectable } from '@angular/core';
import { Task } from 'src/types';


const tasks: Task[] = [
    {
        id: "#TSK_216894891",
        name: "Main Data Ethiopia",
        status: 'Running',
        creationDate: "2023-09-25T21:53:12.957Z",
        selectionCriteria: [
            "Electricity Company of Ghana",
            "Demo Region 1",
            'Demo Region 1'
        ],
        Operations: [
            "Load Meter Profile",
            "Commission with tariff",
            "Commission with tariff",
        ],
        statusProgress: {
            running: 120,
            finished: 70,
            new: 20
        }
    }, {
        id: "#TSK_216894891",
        name: "Read Main Data",
        status: 'Finished',
        creationDate: "2023-09-25T21:53:12.957Z",
        selectionCriteria: [
            "Electricity Company of Ghana",
            "Demo Region 1",
        ],
        Operations: [
            "Load Meter Profile",
            "Commission with tariff",
            "Commission with tariff",
        ],
        statusProgress: {
            running: 210,
            finished: 120,
            new: 0
        }
    },
    {
        id: "#TSK_216894891",
        name: "Read Main Data",
        status: 'Queued',
        creationDate: "2023-09-25T21:53:12.957Z",
        selectionCriteria: [
            "Electricity Company of Ghana",
            "Demo Region 1",
        ],
        Operations: [
            "Load Meter Profile",
            "Commission with tariff",
        ],
        statusProgress: {
            running: 0,
            finished: 0,
            new: 0
        }
    },
    {
        id: "#TSK_216894891",
        name: "Read Main Data",
        status: 'New',
        creationDate: "2023-09-25T21:53:12.957Z",
        selectionCriteria: [
            "Electricity Company of Ghana",
            "Demo Region 1",
        ],
        Operations: [
            "Load Meter Profile",
            "Commission with tariff",
        ],
        statusProgress: {
            running: 0,
            finished: 0,
            new: 0
        }
    },
    {
        id: "#TSK_216894891",
        name: "Read Main Data",
        status: 'New',
        creationDate: "2023-09-25T21:53:12.957Z",
        selectionCriteria: [
            "Electricity Company of Ghana",
            "Demo Region 1",
        ],
        Operations: [
            "Load Meter Profile",
            "Commission with tariff",
        ],
        statusProgress: {
            running: 0,
            finished: 0,
            new: 0
        }
    },
    {
        id: "#TSK_216894891",
        name: "Read Main Data",
        status: 'New',
        creationDate: "2023-09-25T21:53:12.957Z",
        selectionCriteria: [
            "Electricity Company of Ghana",
            "Demo Region 1",
        ],
        Operations: [
            "Load Meter Profile",
            "Commission with tariff",
        ],
        statusProgress: {
            running: 0,
            finished: 0,
            new: 0
        }
    }
]

@Injectable()
export class TasksService {
    constructor() { }


    getTasks(): Task[] {
        return tasks;
    }

}