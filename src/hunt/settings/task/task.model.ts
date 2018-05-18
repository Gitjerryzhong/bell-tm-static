export const ReviewType = [
    {label: '项目申请', value: 'APPLICATION'},
    {label: '项目检查', value: 'CHECK'},
    {label: '其他', value: 'OTHER'},
];

export class Task {
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

    toServerDto(): any {
        return {
            title: this.title,
            content: this.content,
            startDate: this.startDate,
            endDate: this.endDate,
            type: this.type,
            remind: this.remind,
            ban: this.ban,
        };
    }
}
