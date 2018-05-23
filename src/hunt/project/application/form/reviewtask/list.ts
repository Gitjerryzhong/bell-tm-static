import { Component } from '@angular/core';

import { TaskForm } from '../../../../settings/task/shared/form.model';

import { ProjectFormService } from '../form.service';

import './task.model';

@Component({
    selector: 'task-list',
    styleUrls: ['list.scss'],
    templateUrl: 'list.html',
})
export class TaskList {
    tasks: TaskForm[];

    constructor(private service: ProjectFormService) {
        this.service.loadTaskList().subscribe((dto: any[]) => {
            this.tasks = dto.map(data => {
                const task = new TaskForm(data);
                task.applicationId = data.applicationId;
                task.status = data.status;
                return task;
            });
        });
    }
}
