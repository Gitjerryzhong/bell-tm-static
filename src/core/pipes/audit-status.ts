import {Pipe} from '@angular/core';

import {AuditStatus} from '../constants/audit-status';
import {auditStatusText} from '../utils/audit-status';

@Pipe({name: 'statusText'})
export class AuditStatusTextPipe {
    transform(value: AuditStatus, formater: (value: AuditStatus) => string = null) {
        if (formater) {
            return formater(value);
        } else {
            return auditStatusText(value);
        }
    }
}
