import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';

import { TypeEditorDialog } from './editor/type-dialog';
import { TypeComponent } from './type.component';
import { TypeService } from './type.service';

@NgModule({
    imports: [
        BrowserModule,
        CommonDirectivesModule,
        RestModule.for('/api/hunt/subtypes'),
        CommonDialogsModule,
        FormsModule,
    ],
    declarations: [
        TypeComponent,
        TypeEditorDialog,
    ],
    providers: [
        Dialog,
        TypeService,
        {provide: 'PARENTTYPE_API_URL', useValue: '/api/hunt/types'},
    ],
    entryComponents: [
        TypeEditorDialog,
    ],
    bootstrap: [TypeComponent],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
