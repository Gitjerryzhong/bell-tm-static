import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiUrl, EditService, Rest } from 'core/rest';

@Injectable()
export class ProjectFormService extends EditService {
    list: any[];

    constructor(
        rest: Rest,
        api: ApiUrl,
        @Inject('REVIEWTASK_API_URL') private tasksApiUrl: string) {
        super(rest, api);
    }

    save(id: number, form: any): Observable<any> {
        if (id) {
            return this.update(id, form);
        } else {
            return this.create(form);
        }
    }

    loadTaskList(): Observable<any> {
        return this.rest.get(`${this.tasksApiUrl}`);
    }

    loadTaskItem(id: number): Observable<any> {
        return this.rest.get(`${this.tasksApiUrl}/${id}`);
    }

}
