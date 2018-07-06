import {Component} from '@angular/core';

import {CarryoutService} from './agreement-carryout-service';
@Component({
    selector: 'agreement-carryout',
    styleUrls: ['agreement-carryout-component.scss'],
    templateUrl: 'agreement-carryout-component.html',
})
export class AgreementCarryoutComponent {
    carryoutList: any[];

    constructor(private service: CarryoutService) {
        this.loadData();
    }

    loadData() {
        this.service.loadList().subscribe(dto => this.carryoutList = dto);
    }

    filterBySubject(name: string) {
        return (carryoutInfo: any) => carryoutInfo.subjectName === name;
    }

    carryoutItem(item: any) {
        this.service.create({majorId: `${item.grade}${item.subjectId}`, regionName: item.regionName}).subscribe(() => this.loadData());
    }
}
