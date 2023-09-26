import { Component, OnInit } from "@angular/core";
import { taskListService } from "../../services/taskList.service";
import { Task } from "src/types";

@Component({
    selector: 'app-task-list',
    templateUrl: './taskList.component.html',
    styleUrls: ['./taskList.component.scss'],
})
export class TaskListComponent implements OnInit {

    public tasks: Task[] = []
    public tasksPage: Task[] = []
    public numberOfPages: number = 0
    public pages: number[] = []
    public currentPage = 1
    public disablePrev = true
    public disableNext = false

    constructor(
        private tasksService: taskListService,
    ) { }

    ngOnInit(): void {
        this.tasks = this.tasksService.getTasks()
        const length = this.tasks.length

        this.numberOfPages = Math.ceil(length / 6)
        this.pages = Array.from({ length: this.numberOfPages }, (_, i) => i + 1)

        if (this.numberOfPages <= 1) {
            this.disableNext = true
        }

        if (length > 6) {
            this.tasksPage = this.tasks.slice(0, 6)
        }
    }

    onClickPrev() {
        this.onClick(this.currentPage - 1)
    }

    onClickNext() {
        this.onClick(this.currentPage + 1)
    }

    onClick(value: number) {
        if (value <= 1) {
            this.disablePrev = true
        } else {
            this.disablePrev = false
        }
        if (value >= this.numberOfPages) {
            this.disableNext = true
        } else {
            this.disableNext = false
        }
        this.tasksPage = this.tasks.slice((value - 1) * 6, value * 6)
        this.currentPage = value
    }
}