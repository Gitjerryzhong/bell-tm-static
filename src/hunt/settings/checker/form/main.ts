import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { TeacherSelectModule } from 'core/components/teacher-select/teacher-select.module';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';

import { CheckerFormDialog } from './editor/form-editor.component';
import { CheckerRoutingModule } from './form-routing.module';
import { CheckerViewComponent } from './form.component';
import { CheckerFormService } from './form.service';
import { CheckerListComponent } from './list/form-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RestModule.for('/api/hunt/settings/checkers'),
        CommonDialogsModule,
        CommonDirectivesModule,
        CheckerRoutingModule,
        TeacherSelectModule,
    ],
    declarations: [
        CheckerListComponent,
        CheckerViewComponent,
        CheckerFormDialog,
    ],
    providers: [
        Dialog,
        CheckerFormService,
    ],
    entryComponents: [
        CheckerFormDialog,
    ],
    bootstrap: [
        CheckerViewComponent,
    ],
})
class CheckerFormModule {}

platformBrowserDynamic().bootstrapModule(CheckerFormModule);
