import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glb-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {
  public title: string = 'Coligada New Component';

  constructor() { }

  ngOnInit(): void {
  }

}
