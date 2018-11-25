import { Status } from './../store/models/status';
import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../store/api.service';
import { GlobalStore, GlobalSlideTypes } from '../store/global-store.state';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() public criterio: string;
  public statuses: any[];
  public agencies: any[];
  public missionTypes: any[];
  public filterSelection: string;
  public filteredLaunches: any[] = [];
  public allLaunches: any[];


  constructor(private global: GlobalStore) {}


  ngOnInit() {
    this.global
      .select$(GlobalSlideTypes.launches)
      .subscribe(launches => (this.allLaunches = launches));

    this.global
      .select$(GlobalSlideTypes.statuses)
      .subscribe(statuses => (this.statuses = statuses));

    this.global
      .select$(GlobalSlideTypes.missionTypes)
      .subscribe(missionTypes => (this.missionTypes = missionTypes));

    this.global
      .select$(GlobalSlideTypes.agencies)
      .subscribe(agencies => (this.agencies = agencies));

  }

  selectChange() {
    let filteredLaunches;
    if (this.allLaunches !== undefined) {
      if (this.criterio === 'Estado') {
        filteredLaunches = this.allLaunches.filter(l =>
          l.status == this.filterSelection
        );
      } else if (this.criterio === 'Agencias') {
        filteredLaunches = this.allLaunches.filter(l =>
          l.rocket !== undefined &&
          l.rocket.agencies !== null &&
          l.rocket.agencies[0] !== undefined &&
          l.rocket.agencies[0].id == this.filterSelection
        );
      } else if (this.criterio === 'Tipo') {
        filteredLaunches = this.allLaunches.filter(l =>
          l.missions !== undefined &&
          l.missions[0] !== undefined &&
          l.missions[0].type == this.filterSelection
        );
      }
  }
    this.filteredLaunches = filteredLaunches;
  }

}
