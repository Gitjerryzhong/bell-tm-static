export class AgreementForm {
    id: number;
    agreementName: string;
    regionId: number;
    regionName: string;
    universityEn: string;
    universityCn: string;
    memo: string;
    items: AgreementItem[];
    university: any;

    constructor(dto: any) {
        this.id = dto.id;
        this.agreementName = dto.agreementName;
        this.regionId = dto.regionId;
        this.regionName = dto.regionName;
        this.universityEn = dto.universityEn;
        this.universityCn = dto.universityCn;
        this.memo = dto.memo;
        this.items = dto.items.map((itemDto: any) => new AgreementItem(this, itemDto));
        this.university = dto.university;
    }
}

/* tslint:disable:max-classes-per-file */
export class AgreementItem {
    form: AgreementForm;
    id: number;
    grade: number;
    subjectName: string;
    departmentId: string;
    departmentName: string;
    coMajors: any[];

    constructor(form: AgreementForm, dto: any) {
        this.form = form;
        this.id = dto.id;
        this.grade = dto.grade;
        this.subjectName = dto.subjectName;
        this.departmentId = dto.departmentId;
        this.departmentName = dto.departmentName;
        this.coMajors = dto.coMajors;
    }

    equalsTo(other: AgreementItem): boolean {
        if (this.id && other.id && this.id === other.id) {
            return true;
        }
        return false;
    }
}
