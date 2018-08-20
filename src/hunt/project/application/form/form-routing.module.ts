import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { EditMode } from 'core/constants';

import { ProjectFormEditorComponent } from './editor/form-editor.component';
import { ProjectItemComponent } from './item/item.component';
import { ProjectListComponent } from './list/form-list.component';
import { TaskItem } from './reviewtask/item';
import { TaskList } from './reviewtask/list';

const routes: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'list', component: ProjectListComponent },
    { path: 'taskList', component: TaskList, data: { type: 'application' }},
    { path: 'taskList/:id', component: TaskItem },
    { path: 'create/:reviewTaskId', component: ProjectFormEditorComponent, data: { mode: EditMode.Create }},
    { path: ':id/edit', component: ProjectFormEditorComponent, data: { mode: EditMode.Edit }},
    { path: ':id', component: ProjectItemComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true}),
    ],
    exports: [
        RouterModule,
    ],
})
export class RoutingModule {}
