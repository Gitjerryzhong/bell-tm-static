import { Component } from '@angular/core';

import { UniversityFormService } from '../form.service';

@Component({
    selector: 'university-list',
    templateUrl: 'form-list.component.html',
})
export class UniversityListComponent {
    universities: any[];
    regions: any[];
    majors: any[];

    constructor(private service: UniversityFormService) {
        this.service.loadList(this.service.filters).subscribe(dto => this.loadData(dto));
    }

    loadData(dto: any) {
        this.universities = dto.list;
    }

    orderBy(key: string) {
        this.universities.sort((a, b) => a[key].localeCompare(b[key]));
    }
}
