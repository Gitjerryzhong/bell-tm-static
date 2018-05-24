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
    [ReviewType.CHECK]:     {class: 'badge-info',    text: '项目检查'},
    [ReviewType.OTHER]:   {class: 'badge-secondary',    text: '其他'},
});

export const levelLabels: Labels<Level> = new Labels(Level, {
    [Level.UNIVERSITY]:   {class: 'badge-secondary', text: '校级'},
    [Level.CITY]:   {class: 'badge-secondary',    text: '市级'},
    [Level.PROVINCE]:   {class: 'badge-secondary',    text: '省级'},
    [Level.NATION]:   {class: 'badge-secondary',    text: '国家级'},
});

export const TypeList = [
    {label: '项目申请', value: 'APPLICATION'},
    {label: '项目检查', value: 'CHECK'},
    {label: '其他', value: 'OTHER'},
];

export const LevelList = [
    {label: '校级', value: 'UNIVERSITY'},
    {label: '市级', value: 'CITY'},
    {label: '省级', value: 'PROVINCE'},
    {label: '国家级', value: 'NATION'},
];
