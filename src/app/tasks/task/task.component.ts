import { Component, Input, OnInit } from "@angular/core";
import { Task } from "src/types";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

    @Input() task: Task = {} as Task;
    date: string = ''
    hours: string = ''

    ngOnInit(): void {
        this.date = this.task.creationDate.split('T')[0]
        this.hours = this.task.creationDate.split('T')[1].split('.')[0]
    }

}