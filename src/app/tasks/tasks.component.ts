import { Component, OnInit } from "@angular/core";
import { TasksService } from "../services/tasks.service";
import { Task } from "src/types";

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {

    public tasks: Task[] = []

    constructor(
        private tasksService: TasksService,
    ) { }

    ngOnInit(): void {
        this.tasks = this.tasksService.getTasks()
    }

}