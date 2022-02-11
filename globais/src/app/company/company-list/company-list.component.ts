import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glb-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public title: string = 'Coligada List Component';

  constructor() { }

  ngOnInit(): void {
  }

}
