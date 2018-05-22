import { Pipe } from '@angular/core';

import { ReviewType, typeLabels } from './constants';

@Pipe({name: 'reviewType'})
export class ReviewTypePipe {
    transform(value: ReviewType, arg: string) {
        if (arg === 'text') {
            return typeLabels.getText(value);
        } else if (arg === 'class') {
            return typeLabels.getClass(value);
        }
    }
}
