import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';

import { TypeEditorDialog } from './editor/type-dialog';
import { TaskComponent } from './type.component';
import { TaskService } from './type.service';

@NgModule({
    imports: [
        BrowserModule,
        CommonDirectivesModule,
        RestModule.for('/api/hunt/tasks'),
        CommonDialogsModule,
        FormsModule,
    ],
    declarations: [
        TaskComponent,
        TypeEditorDialog,
    ],
    providers: [
        Dialog,
        TaskService,
    ],
    entryComponents: [
        TypeEditorDialog,
    ],
    bootstrap: [TaskComponent],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
