import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkflowItemResolve, WorkflowListResolve } from 'core/workflow';

import { ApplicationCheckItemComponent } from './check-item.component';
import { ApplicationCheckListComponent } from './check-list.component';

const routes: Routes = [
    {path: '', redirectTo: 'todo', pathMatch: 'full'},
    {
        path: ':type',
        children: [
            {
                path: '',
                component: ApplicationCheckListComponent,
                resolve: {list: WorkflowListResolve},

            },
            {
                path: ':id',
                component: ApplicationCheckItemComponent,
                resolve: {item: WorkflowItemResolve},
            },
            {
                path: ':id/workitems/:wi',
                component: ApplicationCheckItemComponent,
                resolve: {item: WorkflowItemResolve},
            },
        ],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [
        RouterModule,
    ],
})
export class ApplicationCheckRoutingModule {}
