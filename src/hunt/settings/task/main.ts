import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';

import { PipesModule } from '../shared/common-pipes';
import { FormViewerModule } from './shared/form-viewer.module';

import { FormEditorComponent } from './editor/form-editor.component';
import { BatchRoutingModule } from './form-routing.module';
import { ViewComponent } from './form.component';
import { FormService } from './form.service';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/form-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RestModule.for('/api/hunt/tasks'),
        FormViewerModule,
        CommonDialogsModule,
        CommonDirectivesModule,
        BatchRoutingModule,
        PipesModule,
    ],
    declarations: [
        FormEditorComponent,
        ItemComponent,
        ListComponent,
        ViewComponent,
    ],
    providers: [
        Dialog,
        FormService,
    ],
    bootstrap: [
        ViewComponent,
    ],
    exports: [
        ViewComponent,
    ],
})
export class TaskFormModule {}

platformBrowserDynamic().bootstrapModule(TaskFormModule);
