import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {CommonDirectivesModule} from 'core/common-directives';

import {FormViewerComponent} from './form-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        CommonDirectivesModule,
    ],
    declarations: [
        FormViewerComponent,
    ],
    exports: [
        FormViewerComponent,
    ],
})
export class FormViewerModule {}
