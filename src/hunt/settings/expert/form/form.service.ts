import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiUrl, EditService, Rest } from 'core/rest';

@Injectable()
export class ExpertFormService extends EditService {
    list: any[];

    constructor(
        rest: Rest,
        api: ApiUrl,
        @Inject('TEAM_API_URL')
        private teamApi: string,
    ) {
        super(rest, api);
    }

    save(id: number, form: any): Observable<any> {
        if (id) {
            return this.update(id, form);
        } else {
            return this.create(form);
        }
    }

    makeTeam(value: any): Observable<any> {
        return this.rest.post(this.teamApi, value);
    }

    loadTeam(): Observable<any> {
        return this.rest.get(this.teamApi);
    }

    dismiss(id: number): Observable<any> {
        return this.rest.delete(`${this.teamApi}/${id}`);
    }
}
