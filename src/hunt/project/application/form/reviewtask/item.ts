import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskForm } from '../../../../settings/task/shared/form.model';
import { ProjectFormService } from '../form.service';

@Component({
    selector: 'task-item',
    templateUrl: 'item.html',
})
export class TaskItem {
    vm: TaskForm;

    constructor(
        private route: ActivatedRoute,
        private service: ProjectFormService,
    ) {
        const params = this.route.snapshot.params;
        this.service.loadTaskItem(params['id']).subscribe(dto => {
            this.vm = new TaskForm(dto);
        });
    }
}
