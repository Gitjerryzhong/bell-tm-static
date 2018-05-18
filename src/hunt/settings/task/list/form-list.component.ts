import {Component} from '@angular/core';

import {Task} from '../task.model';
import {TaskService} from '../task.service';

@Component({
    selector: 'task-list',
    styleUrls: ['form-list.component.scss'],
    templateUrl: 'form-list.component.html',
})
export class TaskListComponent {
    tasks: Task[];

    constructor(private service: TaskService) {
        this.service.loadList().subscribe(dto => this.loadData(dto));
    }

    loadData(dto: any[]) {
        this.tasks = dto.map(data => new Task(data));
    }
}
