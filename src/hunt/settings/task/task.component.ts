import { Component } from '@angular/core';

import { Dialog } from 'core/dialogs';

import { TypeEditorDialog } from './editor/type-dialog';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Component({
    selector: 'task-view',
    template: '<router-outlet></router-outlet>',
})
export class TaskComponent {}
