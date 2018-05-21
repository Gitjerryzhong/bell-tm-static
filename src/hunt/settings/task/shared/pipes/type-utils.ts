import {Labels} from 'core/models/label';

import {ReviewType} from './constants';

const typeLabels: Labels<ReviewType> = new Labels(ReviewType, {
    [ReviewType.APPLICATION]:   {class: 'badge-success', text: '项目申请'},
    [ReviewType.CHECK]: {class: 'badge-info',    text: '项目检查'},
    [ReviewType.OTHER]:   {class: 'badge-secondary',    text: '其他'},
});

export function reviewTypeText(status: ReviewType) {
    return typeLabels.getText(status);
}

export function reviewTypeClass(status: ReviewType) {
    return typeLabels.getClass(status);
}
