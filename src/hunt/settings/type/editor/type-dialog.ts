import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BaseDialog } from 'core/dialogs';

import { LevelList } from '../../shared/constants';

import { Type } from '../type.model';
import { TypeService } from '../type.service';

@Component({
    selector: 'type-editor',
    styleUrls: ['type-dialog.scss'],
    templateUrl: 'type-dialog.html',
})
export class TypeEditorDialog extends BaseDialog {
    form: Type;
    levels = LevelList;
    parentTypes: any[];
    pending = true;

    constructor(private service: TypeService) {
        super();
        this.form = new Type({});
        this.service.loadParentTypes().subscribe(dto => {
            this.parentTypes = dto;
            if (this.parentTypes && this.parentTypes.length) {
                this.parentTypeSelected(this.parentTypes[0]);
            } else {
                this.form.parentName = '';
            }
        });
    }

    parentTypeSelected(parentType: any) {
        this.form.parentName = parentType.name;
        this.form.parentId = parentType.id;
    }

    parentTypeCreate() {
        this.form.parentName = null;
        this.form.parentId = null;
        this.pending = false;
    }

    protected onOpening(): Observable<any> {
        return null;
    }

    protected onConfirmed(): any {
        return this.form.toServerDto();
    }
}
