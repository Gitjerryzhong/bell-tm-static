import { constants } from 'zlib';

export class Type {
    parentId: number;
    parentName: string;
    name: string;
    level: string;
    period: number;
    enabled: boolean;

    constructor(dto: any) {
        this.parentId = dto.parentId;
        this.parentName = dto.parentName;
        this.name = dto.name;
        this.level = dto.level;
        this.period = dto.period;
        this.enabled = dto.enabled;
    }

    toServerDto(): any {
        return {
            parentId: this.parentId,
            parentName: this.parentName,
            level: this.level,
            name: this.name,
            period: this.period,
            enabled: this.enabled,
        };
    }
}
