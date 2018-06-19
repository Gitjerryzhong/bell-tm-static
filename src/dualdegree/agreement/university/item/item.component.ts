import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { UniversityForm } from '../form.model';
import {UniversityFormService} from '../form.service';

@Component({
    selector: 'university-item',
    templateUrl: 'item.component.html',
})
export class UniversityItemComponent {
    vm: UniversityForm;
    items: any[];

    constructor(
        private route: ActivatedRoute,
        private service: UniversityFormService,
    ) {
        const params = this.route.snapshot.params;
        this.service.loadItem(params['id']).subscribe(dto => {
            this.vm = new UniversityForm(dto);
            this.items = dto.items;
        });
    }
}
