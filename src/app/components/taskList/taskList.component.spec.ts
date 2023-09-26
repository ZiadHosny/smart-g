import { TestBed } from '@angular/core/testing';
import { TaskListComponent } from './taskList.component';
import { Task } from 'src/types';

describe('taskListComponent', () => {
  let mockTaskListService: any
  let taskListComponent: TaskListComponent
  let tasks: Task[]

  beforeEach(async () => {
    tasks = [
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
        operations: [
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
        operations: [
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
        operations: [
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
        operations: [
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
        operations: [
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
        operations: [
          "Load Meter Profile",
          "Commission with tariff",
        ],
        statusProgress: {
          running: 0,
          finished: 0,
          new: 210
        }
      }
    ]

    mockTaskListService = jasmine.createSpyObj(['getTasks'])
    taskListComponent = new TaskListComponent(mockTaskListService);
  });

  it('should create the taskList', () => {
    taskListComponent.tasks = tasks


  });

  // it(`should have as title 'smart-g'`, () => {
  //   const fixture = TestBed.createComponent(TaskListComponent);
  // });
});
