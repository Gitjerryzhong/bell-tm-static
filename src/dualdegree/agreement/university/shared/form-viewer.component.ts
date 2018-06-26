import {Component, Input} from '@angular/core';

@Component({
    selector: 'university-form-viewer',
    templateUrl: 'form-viewer.component.html',
})
export class UniversityFormViewerComponent {
    @Input() vm: any;
}
