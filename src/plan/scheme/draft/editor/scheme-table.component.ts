import {Component, EventEmitter, Input, Output} from '@angular/core';

import {EditMode} from 'core/constants';

import {AbstractGroup, Scheme, SchemeCourse} from '../../shared/scheme.model';

/**
 * 教学计划表格
 */
@Component({
    selector: 'scheme-table',
    templateUrl: 'scheme-table.component.html',
})
export class SchemeDraftTableComponent {
    @Input() scheme: Scheme;
    @Input() editMode: EditMode;

    @Output() add: EventEmitter<AbstractGroup> = new EventEmitter<AbstractGroup>();
    @Output() import: EventEmitter<AbstractGroup> = new EventEmitter<AbstractGroup>();
    @Output() edit: EventEmitter<SchemeCourse> = new EventEmitter<SchemeCourse>();
    @Output() delete: EventEmitter<SchemeCourse> = new EventEmitter<SchemeCourse>();
    @Output() restore: EventEmitter<SchemeCourse> = new EventEmitter<SchemeCourse>();
}
