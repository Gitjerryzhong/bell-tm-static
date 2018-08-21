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
import { ApplicationApprovalComponent } from './approval.component';
import { ApplicationApprovalRoutingModule } from './approval.routing';

import { ApplicationApprovalItemComponent } from './approval-item.component';
import { ApplicationApprovalListComponent } from './approval-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonDirectivesModule,
        WorkflowModule,
        RestModule.for('/api/hunt/approvers/${userId}/applications'),
        ProjectFormViewerModule,
        ApplicationApprovalRoutingModule,
        PipesModule,
    ],
    declarations: [
        ApplicationApprovalComponent,
        ApplicationApprovalListComponent,
        ApplicationApprovalItemComponent,
    ],
    providers: [
        Dialog,
    ],
    bootstrap: [ApplicationApprovalComponent],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
