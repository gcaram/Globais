import { Component, OnInit } from '@angular/core';
import { PoNavbarItem } from '@po-ui/ng-components';

@Component({
  selector: 'glb-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public title: string = 'Coligada Main Component';

  public IsMenuCollapsed: boolean = false;

  public items: Array<PoNavbarItem> = [];

  ngOnInit(): void {
    this.LoadItems();
  }

  public LoadItems() {
    this.items = [];

    this.items.push({
      label: 'Lista',
      link: "../company/list"
    }, {
      label: 'Visualizar',
      link: "../company/view"
    }, {
      label: 'Edit',
      link: "../company/edit"
    }, {
      label: 'Novo',
      link: "../company/new"
    }
    );
  }
}