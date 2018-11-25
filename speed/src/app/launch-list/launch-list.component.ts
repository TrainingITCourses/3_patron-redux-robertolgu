import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css']
})
export class LaunchListComponent implements OnInit {

@Input() public filteredLaunches: any[];

  constructor() { }

  ngOnInit() {
  }

}
