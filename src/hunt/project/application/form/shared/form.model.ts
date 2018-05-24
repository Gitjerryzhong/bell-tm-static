export const Titles = [
    '教授',
    '副教授',
    '讲师',
    '助教',
    '其他正高级',
    '其他副高级',
    '其他中级',
    '其他初级',
    '未评级',
];

export const Offices = [
    '校长',
    '副校长',
    '处长',
    '副处长',
    '院长/部长/主任',
    '副院长/副部长/副主任',
    '系主任/专业负责人',
    '院长助理/部长助理',
    '实验室负责人',
    '其他',
    '无',
];

export const Degrees = ['大专', '本科', '硕士', '博士'];

export class ProjectForm {
    id: number;
    principalId: string;
    principalName: string;
    title: string;
    degree: string;
    email: string;
    discipline: string;
    direction: string;
    departmentId: string;
    departmentName: string;
    office: string;
    phone: string;
    name: string;
    urls: string;
    subtypeId: number;
    subtype: string;
    level: string;
    originId: number;
    origin: string;
    members: string;
    content: string;
    achievements: string;
    memberList: string[];

    constructor(dto: any) {
        this.id = dto.id;
        this.principalId = dto.principalId;
        this.principalName = dto.principalName;
        this.title = dto.title;
        this.degree = dto.degree;
        this.email = dto.email;
        this.discipline = dto.discipline;
        this.direction = dto.direction;
        this.departmentId = dto.departmentId;
        this.departmentName = dto.departmentName;
        this.office = dto.office;
        this.phone = dto.phone;
        this.name = dto.name;
        this.urls = dto.urls;
        this.level = dto.level;
        this.subtype = dto.subtype;
        this.subtypeId = dto.subtypeId;
        this.origin = dto.origin;
        this.originId = dto.originId;
        this.members = dto.members;
        this.content = dto.content;
        this.achievements = dto.achievements;
        this.memberList = this.members ? this.members.split(';') : new Array(6).fill('');
    }
}
