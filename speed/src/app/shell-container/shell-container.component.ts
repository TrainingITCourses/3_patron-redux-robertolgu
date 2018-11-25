import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../store/api.service';
import { GlobalStore, GlobalSlideTypes } from '../store/global-store.state';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shell-container',
  templateUrl: './shell-container.component.html',
  styleUrls: ['./shell-container.component.css']
})
export class ShellContainerComponent implements OnInit {

  constructor(
    private api: ApiService,
    private cdRef: ChangeDetectorRef,
    private global: GlobalStore
  ) { }

  public ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.api.getLaunches();
    this.api.getStatusTypes();
    this.api.getMissionTypes();
    this.api.getAgencies();
  }
}
