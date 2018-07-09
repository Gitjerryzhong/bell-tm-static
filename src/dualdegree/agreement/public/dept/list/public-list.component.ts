import {Component} from '@angular/core';

import * as _ from 'lodash';

import {AgreementPublicService} from '../../public.service';

@Component({
    selector: 'public-list',
    templateUrl: 'public-list.component.html',
})
export class AgreementPublicComponent {
    agreementSubjects: any[];

    constructor(private service: AgreementPublicService) {
        this.service.loadList().subscribe(dto => {
            this.agreementSubjects = dto;
        });
    }

    filterBySubject(name: string) {
        return (major: any) => major.subjectName === name;
    }
}
