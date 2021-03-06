import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {CommonDialog} from 'core/common-dialogs';
import {SubmitOptions} from 'core/workflow';

import {BookingForm} from '../../shared/form.model';
import {BookingFormService} from '../form.service';
import './form-item.model';

@Component({
    templateUrl: 'form-item.component.html',
})
export class BookingFormItemComponent {
    form: BookingForm;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private dialog: CommonDialog,
        private service: BookingFormService) {
        this.route.params.subscribe(params => {
            this.loadData(parseInt(params['id'], 10));
        });
    }

    loadData(id: number) {
        this.service.loadItem(id).subscribe(dto => {
            this.form = new BookingForm(dto);
            this.form.editable = dto.editable;
        });
    }

    remove() {
        this.dialog.confirm('删除', '确定要删除吗？').then(() => {
            this.service.delete(this.form.id).subscribe(() => {
                this.router.navigate(['/']);
            });
        });
    }

    get submitOptions(): SubmitOptions {
        return {
            id: this.form.id,
            type: 'check',
            what: this.form.title,
        };
    }
}
