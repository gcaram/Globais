import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glb-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  public title: string = 'Coligada Edit Component';

  constructor() { }

  ngOnInit(): void {
  }

}
