import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ApiUrl, EditService, Rest } from 'core/rest';

@Injectable()
export class CarryoutService extends EditService {
    constructor(rest: Rest, api: ApiUrl) {
        super(rest, api);
    }

    get url(): string {
        const match = window.location.href.match(/\/(users)\/([^\/]+)\//);
        if (match) {
            return `/api/dualdegree/users/${ match[2]}/carryout`;
        } else {
            return null;
        }
    }

    loadList(options: {[key: string]: any} = {}): Observable<any> {
        return this.rest.get(this.url);
    }

    create(value: any): Observable<string> {
        return this.rest.post(this.url, value).map(data => data.id);
    }
}
