import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';

import { MajorGroupPipe } from '../../shared/pipes/major-group';

import { UniversityFormEditorComponent } from './editor/form-editor.component';
import { MajorDialog } from './editor/major-item/major.dialog';
import { UniversityRoutingModule } from './form-routing.module';
import { UniversityViewComponent } from './form.component';
import { UniversityFormService } from './form.service';
import { UniversityItemComponent } from './item/item.component';
import { UniversityListComponent } from './list/form-list.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RestModule.for('/api/dualdegree/users/${userId}/universities'),
        CommonDialogsModule,
        CommonDirectivesModule,
        UniversityRoutingModule,
    ],
    declarations: [
        UniversityFormEditorComponent,
        UniversityListComponent,
        UniversityViewComponent,
        UniversityItemComponent,
        MajorGroupPipe,
        MajorDialog,
    ],
    providers: [
        Dialog,
        UniversityFormService,
    ],
    entryComponents: [
        MajorDialog,
    ],
    bootstrap: [
        UniversityViewComponent,
    ],
})
export class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
