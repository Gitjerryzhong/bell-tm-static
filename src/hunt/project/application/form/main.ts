import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CommonDirectivesModule } from 'core/common-directives';
import { RestModule } from 'core/rest';

import { PipesModule } from '../../../settings/shared/common-pipes';

import { RoutingModule } from './form-routing.module';
import { ProjectViewComponent } from './form.component';
import { ProjectFormService } from './form.service';
import { ProjectListComponent } from './list/form-list.component';
import { TaskModule } from './reviewtask/task.module';

@NgModule({
    imports: [
        FormsModule,
        BrowserModule,
        CommonDirectivesModule,
        RestModule.for('/api/hunt/teachers/${userId}/projects'),
        RoutingModule,
        PipesModule,
        TaskModule,
    ],
    declarations: [
        ProjectViewComponent,
        ProjectListComponent,
    ],
    providers: [
        ProjectFormService,
        {provide: 'REVIEWTASK_API_URL', useValue: '/api/hunt/tasks'},
    ],
    bootstrap: [ProjectViewComponent],
})
class MainModule {}

platformBrowserDynamic().bootstrapModule(MainModule);
