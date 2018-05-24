import { Component } from '@angular/core';

import { LevelList } from '../../../../settings/shared/constants';

import { ProjectFormService } from '../form.service';
import { Degrees, Offices, ProjectForm, Titles } from '../shared/form.model';
import './form-editor.model';
@Component({
    selector: 'project-form-editor',
    templateUrl: 'form-editor.component.html',
})
export class ProjectFormEditorComponent {
    form: ProjectForm;
    departments: any[];
    subtypes: any[];
    levels = LevelList;
    titles = Titles;
    offices = Offices;
    degrees = Degrees;

    constructor(
        private service: ProjectFormService,
    ) {
        this.service.loadDataForCreate().subscribe(dto => this.loadData(dto));
    }

    loadData(dto: any) {
        this.form = new ProjectForm(dto.form);
        this.departments = dto.departments;
        this.subtypes = dto.subtypes;
    }
}
