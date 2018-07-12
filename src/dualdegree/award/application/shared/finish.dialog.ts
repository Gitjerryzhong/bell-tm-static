import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {BaseDialog} from 'core/dialogs';

@Component({
    selector: 'workflow-finish-dialog',
    templateUrl: 'finish.dialog.html',
})
export class WorkflowFinishDialog extends BaseDialog {
    comment: string;

    protected onOpening(): Observable<any> {
        return null;
    }

    protected onConfirmed(): any {
        return this.comment;
    }
}
