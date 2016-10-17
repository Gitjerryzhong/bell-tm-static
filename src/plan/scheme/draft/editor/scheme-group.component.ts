import {
    Component,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';

import {AbstractGroup, Property, Direction} from '../../common/scheme.model';

/**
 * 小计
 */
@Component({
    selector: '[scheme-group]',
    host: {'[class]': "'group'"},
    templateUrl: 'scheme-group.component.html',
})
export class SchemeGroupComponent {
    @Input('scheme-group') group: AbstractGroup;
    @Input() terms: number[];
    @Output() add: EventEmitter<AbstractGroup> = new EventEmitter<AbstractGroup>();
    @Output() import: EventEmitter<AbstractGroup> = new EventEmitter<AbstractGroup>();

    get summary(): string {
        if (this.group instanceof Property) {
            let property = <Property>this.group;
            if (property.isResidual) {
                let residual = property.scheme.directionResidualCredits;
                if (residual) {
                    return `小计${residual}`;
                } else {
                    return '小计';
                }
            } else {
                return '小计';
            }
        } else if (this.group instanceof Direction) {
            return `小计（${this.group.name}）`;
        } else {
            return null;
        }
    }
}
