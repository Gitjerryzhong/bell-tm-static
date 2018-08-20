import {Component} from '@angular/core';

import {ListOption} from 'core/models';

@Component({
    selector: 'application-check-container',
    template: `
<nav-tabs [options]="options"></nav-tabs>
<router-outlet></router-outlet>
    `,
})
export class ApplicationCheckComponent {
    options: ListOption[] = [
        {type: 'todo', label: '立项待审', class: 'badge-success'},
        {type: 'done', label: '立项已审', class: 'badge-info'},
    ];
}
