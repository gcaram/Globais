import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glb-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {
  public title: string = 'Coligada View Component';

  constructor() { }

  ngOnInit(): void {
  }

}
