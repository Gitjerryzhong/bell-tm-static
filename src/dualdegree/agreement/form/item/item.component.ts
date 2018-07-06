import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AgreementForm} from '../../shared/form.model';
import {AgreementFormService} from '../form.service';

@Component({
    selector: 'agreement-item',
    templateUrl: 'item.component.html',
})
export class AgreementItemComponent {
    vm: AgreementForm;
    items: any[];

    constructor(
        private route: ActivatedRoute,
        private service: AgreementFormService,
    ) {
        const params = this.route.snapshot.params;
        this.service.loadItem(params['id']).subscribe(dto => {
            this.vm = new AgreementForm(dto);
            this.items = dto.items;
        });
    }
}
