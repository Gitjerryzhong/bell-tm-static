import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EditMode} from 'core/constants';

import {FormEditorComponent} from './editor/form-editor.component';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/form-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'editor', component: FormEditorComponent, data: { mode: EditMode.Create }},
    {path: 'list', component: ListComponent},
    {path: ':id/edit', component: FormEditorComponent, data: { mode: EditMode.Edit }},
    {path: ':id', component: ItemComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [
        RouterModule,
    ],
})
export class BatchRoutingModule {}
