import * as moment from 'moment';

export const ReviewType = [
    {label: '项目申请', value: 'APPLICATION'},
    {label: '项目检查', value: 'CHECK'},
    {label: '其他', value: 'OTHER'},
];

export const Ban = [
    {label: '校级在研', value: 'UNIVERSITY'},
    {label: '市级在研', value: 'CITY'},
    {label: '省级在研', value: 'PROVINCE'},
    {label: '国家级在研', value: 'NATION'},
];

export class TaskForm {
    id: number;
    title: string;
    content: string;
    startDate: string;
    endDate: string;
    type: string;
    remind: string;
    ban: string;

    constructor(dto: any) {
        this.id = dto.id;
        this.title = dto.title;
        this.content = dto.content;
        this.startDate = dto.startDate;
        this.endDate = dto.endDate;
        this.type = dto.type;
        this.remind = dto.remind;
        this.ban = dto.ban;
    }

    get isApplyDateValid(): boolean {
        return !(moment().isBefore(this.startDate, 'day') || moment().isAfter(this.endDate, 'day'));
    }
}
