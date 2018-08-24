import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDialogsModule } from 'core/common-dialogs';
import { CommonDirectivesModule } from 'core/common-directives';
import { Dialog } from 'core/dialogs';
import { RestModule } from 'core/rest';

import { ExpertFormService } from './form.service';
import { ExpertListComponent } from './list/form-list.component';
import { TeamDialog } from './list/team.dialog';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RestModule.for('/api/hunt/settings/experts'),
        CommonDialogsModule,
        CommonDirectivesModule,
    ],
    declarations: [
        ExpertListComponent,
        TeamDialog,
    ],
    providers: [
        Dialog,
        ExpertFormService,
        {provide: 'TEAM_API_URL', useValue: '/api/hunt/settings/teams'},
    ],
    entryComponents: [
        TeamDialog,
    ],
    bootstrap: [
        ExpertListComponent,
    ],
})
class ExpertFormModule {}

platformBrowserDynamic().bootstrapModule(ExpertFormModule);
