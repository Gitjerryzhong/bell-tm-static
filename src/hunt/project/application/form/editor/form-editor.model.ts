import { ProjectForm } from '../shared/form.model';

declare module '../shared/form.model' {
    interface ProjectForm {
        toServerDto(): any;
    }
}

ProjectForm.prototype.toServerDto = function(this: ProjectForm): any {
    return {
        principalId: this.principalId,
        title: this.title,
        degree: this.degree,
        email: this.email,
        discipline: this.discipline,
        direction: this.direction,
        departmentId: this.departmentId,
        office: this.office,
        phone: this.phone,
        name: this.name,
        urls: this.urls,
        level: this.level,
        subtypeId: this.subtypeId,
        originId: this.originId,
        members: this.members,
        content: this.content,
        achievements: this.achievements,
    };
};
