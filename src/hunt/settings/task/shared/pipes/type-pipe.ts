import { Pipe } from '@angular/core';

import { ReviewType, typeLabels } from './constants';

@Pipe({name: 'reviewTypeText'})
export class ReviewTypeTextPipe {
    transform(value: ReviewType) {
        return typeLabels.getText(value);
    }
}
