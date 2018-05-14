import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BaseDialog } from 'core/dialogs';

import { Level, Type } from '../type.model';
import { TypeService } from '../type.service';

@Component({
    selector: 'type-editor',
    styleUrls: ['type-dialog.scss'],
    templateUrl: 'type-dialog.html',
})
export class TypeEditorDialog extends BaseDialog {
    form: Type;
    levels = Level;
    parentTypes: any[];
    result: string;
    pending = true;

    constructor(private service: TypeService) {
        super();
        this.form = new Type({});
        this.service.loadParentTypes().subscribe(dto => {
            this.parentTypes = dto;
            this.result = this.parentTypes && this.parentTypes.length ? this.parentTypes[0].name : '';
        });
    }

    parentTypeSelected(parentType: any) {
        this.result = parentType.name;
    }

    parentTypeCreate() {
        this.result = null;
        this.pending = false;
    }

    protected onOpening(): Observable<any> {
        return null;
    }

    protected onConfirmed(): any {
        return null;
    }
}
