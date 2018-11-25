import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public criterio: string;

  options = [
    {name: 'Estado', value: 1},
    {name: 'Agencias', value: 2},
    {name: 'Tipo', value: 3}
  ];

  constructor() { }

  ngOnInit() {
  }

}
