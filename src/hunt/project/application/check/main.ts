import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';
import { WorkflowModule } from 'core/workflow';

import { PipesModule } from '../../../settings/shared/common-pipes';

import { ProjectFormViewerModule } from '../form/shared/form-viewer.module';
import { ApplicationCheckComponent } from './check.component';
import { ApplicationCheckRoutingModule } from './check.routing';

import { ApplicationCheckItemComponent } from './check-item.component';
import { ApplicationCheckListComponent } from './check-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonDirectivesModule,
        WorkflowModule,
        RestModule.for('/api/hunt/checkers/${userId}/applications'),
        ProjectFormViewerModule,
        ApplicationCheckRoutingModule,
        PipesModule,
    ],
    declarations: [
        ApplicationCheckComponent,
        ApplicationCheckListComponent,
        ApplicationCheckItemComponent,
    ],
    providers: [
        Dialog,
    ],
    bootstrap: [ApplicationCheckComponent],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
