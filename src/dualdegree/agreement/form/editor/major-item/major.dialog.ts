import {Component, QueryList, ViewChildren} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {CheckboxSelectorComponent} from 'core/common-directives';
import {BaseDialog} from 'core/dialogs';

@Component({
    selector: 'major-dialog',
    styleUrls: ['major.dialog.scss'],
    templateUrl: 'major.dialog.html',
})
export class MajorDialog extends BaseDialog {
    @ViewChildren(CheckboxSelectorComponent) selectors: QueryList<CheckboxSelectorComponent>;
    majors: any[];
    coMajors: any[];
    items: any[];
    departmentName: string;
    subjectName: string;
    grade: number;

    constructor() {
        super();
    }

    filterByGrade(grade: number) {
        return (major: any) => major.grade === grade;
    }

    filterByDepartment(name: string) {
        return (major: any) => major.departmentName === name;
    }

    protected onOpening(): Observable<any> {
        this.items = this.options.items;
        this.majors = this.options.majors;
        this.coMajors = this.options.coMajors;
        this.majors = this.majors.filter(data => !this.items.some(it => it === data.id));
        return null;
    }

    protected onConfirmed(): any {
        const majorItem = this.majorSelected;
        majorItem.coMajors = this.selectors.filter(s => s.checked).map(s => s.data);
        return majorItem;
    }

    get majorSelected(): any {
        const items = this.majors.filter(major => major.departmentName === this.departmentName
            && major.grade === this.grade
            && major.subjectName === this.subjectName);
        return items.length ? items[0] : null;
    }
}
