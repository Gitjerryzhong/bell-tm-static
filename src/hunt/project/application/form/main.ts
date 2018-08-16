import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';
import { WorkflowModule } from 'core/workflow';

import { PipesModule } from '../../../settings/shared/common-pipes';

import { ProjectFormViewerModule } from '../form/shared/form-viewer.module';

import { ProjectFormEditorComponent } from './editor/form-editor.component';
import { RoutingModule } from './form-routing.module';
import { ProjectViewComponent } from './form.component';
import { ProjectFormService } from './form.service';
import { ProjectItemComponent } from './item/item.component';
import { ProjectListComponent } from './list/form-list.component';
import { TaskModule } from './reviewtask/task.module';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonDialogsModule,
        CommonDirectivesModule,
        RestModule.for('/api/hunt/teachers/${userId}/applications'),
        RoutingModule,
        PipesModule,
        TaskModule,
        WorkflowModule,
        ProjectFormViewerModule,
    ],
    declarations: [
        ProjectViewComponent,
        ProjectListComponent,
        ProjectFormEditorComponent,
        ProjectItemComponent,
    ],
    providers: [
        Dialog,
        ProjectFormService,
        {provide: 'REVIEWTASK_API_URL', useValue: '/api/hunt/tasks'},
    ],
    bootstrap: [ProjectViewComponent],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
