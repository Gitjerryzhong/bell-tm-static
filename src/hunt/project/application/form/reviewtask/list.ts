import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectFormService) {
        const params = this.route.snapshot.params;
        const type = this.route.snapshot.data['type'];
        this.service.loadTaskList(type).subscribe((dto: any[]) => {
            this.tasks = dto.map(data => {
                const task = new TaskForm(data);
                task.applicationId = data.applicationId;
                task.status = data.status;
                return task;
            });
        });
    }
}
