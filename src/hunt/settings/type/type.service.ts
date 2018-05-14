import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiUrl, EditService, Rest } from 'core/rest';

@Injectable()
export class TypeService extends EditService {

    constructor(rest: Rest,
                api: ApiUrl,
                @Inject('PARENTTYPE_API_URL')
                private parenTypeApiUrl: string) {
        super(rest, api);
    }

    save(id: number, form: any): Observable<any> {
        if (id) {
            return this.update(id, form);
        } else {
            return this.create(form);
        }
    }

    loadParentTypes(): Observable<any> {
        return this.rest.get(this.parenTypeApiUrl);
    }
}
