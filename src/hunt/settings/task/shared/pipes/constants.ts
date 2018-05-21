import {Labels} from 'core/models/label';

export enum ReviewType {
    APPLICATION,
    CHECK,
    OTHER,
}

export enum Level {
    UNIVERSITY,
    CITY,
    PROVINCE,
    NATION,
}

export const typeLabels: Labels<ReviewType> = new Labels(ReviewType, {
    [ReviewType.APPLICATION]:   {class: 'badge-success', text: '项目申请'},
    [ReviewType.CHECK]: {class: 'badge-info',    text: '项目检查'},
    [ReviewType.OTHER]:   {class: 'badge-secondary',    text: '其他'},
});
