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
    }
}
