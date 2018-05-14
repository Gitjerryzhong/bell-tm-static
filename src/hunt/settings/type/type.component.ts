import { Component } from '@angular/core';

import { Dialog } from 'core/dialogs';

import { TypeEditorDialog } from './editor/type-dialog';
import { Type } from './type.model';
import { TypeService } from './type.service';

@Component({
    selector: 'type-list',
    templateUrl: 'type.component.html',
})
export class TypeComponent {
    list: Type[];

    constructor(private service: TypeService, private dialog: Dialog) {
        this.service.loadList().subscribe(dto => this.loadData(dto));
    }

    loadData(dto: any[]) {
        this.list = dto.map(data => new Type(data));
    }

    open() {
        this.dialog.open(TypeEditorDialog);
    }
}
