import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { TaskListComponent } from './taskList.component';
import { Task } from 'src/utils/types';
import { taskListService } from 'src/app/services/taskList.service';
import { TaskComponent } from '../task/task.component';

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

describe('taskListComponent', () => {
  let component: TaskListComponent
  let mockTaskListService: jasmine.SpyObj<taskListService>
  let fixture: ComponentFixture<TaskListComponent>

  beforeEach(async () => {
    mockTaskListService = jasmine.createSpyObj<taskListService>(['getTasks'])
    mockTaskListService.getTasks.and.returnValue([
      ...tasks,
      ...tasks.map((e) => ({ ...e, name: `${e.name} 2` })),
      {
        id: "#TSK_216894891",
        name: "Read Main Data 3",
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
    ])

    await TestBed.configureTestingModule({
      declarations: [
        TaskListComponent,
        TaskComponent,
      ],
      providers: [
        { provide: taskListService, useValue: mockTaskListService }
      ]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create TaskListComponent', () => {
    expect(component).toBeTruthy();
    expect(component.tasks.length).toBe(13)
    expect(component.tasksPage.length).toBe(component.tasksPerPage)
    expect(component.numberOfPages).toBe(3)
    expect(component.currentPage).toBe(1)
    expect(component.disablePrev).toBeTrue()

    const prevButton = fixture.debugElement.nativeElement.querySelector('.prev');
    expect(prevButton).toHaveClass('disabled')

  });

  it('should go to next page', () => {
    const nextButton = fixture.debugElement.nativeElement.querySelector('.next');
    const prevButton = fixture.debugElement.nativeElement.querySelector('.prev');

    nextButton.click()
    expect(component.currentPage).toBe(2)
    nextButton.click()
    expect(component.currentPage).toBe(3)
    expect(component.tasksPage.length).toBe(1)
    fixture.detectChanges()
    expect(nextButton).toHaveClass('disabled')
    prevButton.click()
    expect(component.currentPage).toBe(2)

  });

});
