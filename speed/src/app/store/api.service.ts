import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadLaunches, LoadStatuses, LoadAgencies, LoadMissionTypes } from './global-store.actions';
import { GlobalStore } from './global-store.state';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key = 'launches';
  private url = 'https://launchlibrary.net/1.4/launch/1950-01-01?limit=2000';
  constructor(private http: HttpClient, private global: GlobalStore) {}

  public getLaunches = () => {
    const localLaunches = localStorage.getItem(this.key);
    if (localLaunches) {
      this.global.dispatch(new LoadLaunches(JSON.parse(localLaunches)));
    } else {
      this.http
        .get(this.url)
        .pipe(map((res: any) => res.launches))
        .subscribe(launches => {
          localStorage.setItem(this.key, JSON.stringify(launches));
          this.global.dispatch(new LoadLaunches(launches));
        });
    }
  };

  public getAgencies = () =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(
        map((res: any) => res.agencies)
      ).subscribe(agencies => this.global.dispatch(new LoadAgencies(agencies)));

  public getMissionTypes = () =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))
      .subscribe(missionTypes => this.global.dispatch(new LoadMissionTypes(missionTypes)));

  public getStatusTypes = () =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(
        map((res: any) => res.types),
        map((statuses: any[]) => statuses.map(this.setStatusColor))
      )
      .subscribe(statuses => this.global.dispatch(new LoadStatuses(statuses)));
  private setStatusColor = statusType => {
    switch (statusType.id) {
      case 1:
      case 3:
        statusType.color = 'accent';
        break;
      case 2:
      case 6:
        statusType.color = 'primary';
        break;
      case 4:
      case 5:
      case 7:
        statusType.class = 'warn';
        break;
      default:
        break;
    }
    return statusType;
  };
}
