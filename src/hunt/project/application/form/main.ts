import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDirectivesModule } from 'core/common-directives';
import { RestModule } from 'core/rest';

import { RoutingModule } from './form-routing.module';
import { ProjectViewComponent } from './form.component';
import { ProjectFormService } from './form.service';
import { ProjectListComponent } from './list/form-list.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonDirectivesModule,
        RestModule.for('/api/hunt/teachers/${userId}/projects'),
        RoutingModule,
    ],
    declarations: [
        ProjectViewComponent,
        ProjectListComponent,
    ],
    providers: [
        ProjectFormService,
    ],
    bootstrap: [ProjectViewComponent],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
