export class UniversityForm {
    id: string;
    nameCn: string;
    regionId: number;
    regionName: string;
    nameEn: string;
    items: Major[];

    constructor(dto: any) {
        this.id = dto.id;
        this.nameCn = dto.nameCn;
        this.regionId = dto.regionId;
        this.regionName = dto.regionName;
        this.nameEn = dto.nameEn;
        this.items = dto.items.map((itemDto: any) => new Major(this, itemDto));
    }
}

/* tslint:disable:max-classes-per-file */
export class Major {
    form: UniversityForm;
    id: string;
    nameEn: string;
    nameCn: string;
    bachelor: string;

    constructor(form: UniversityForm, dto: any) {
        this.form = form;
        this.id = dto.id;
        this.nameEn = dto.nameEn;
        this.nameCn = dto.nameCn;
        this.bachelor = dto.bachelor;
    }

    equalsTo(other: Major): boolean {
        if (this.id && other.id && this.id === other.id) {
            return true;
        }
        return false;
    }
}
