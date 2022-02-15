import { Component, OnInit, OnDestroy } from '@angular/core';
import { PoDynamicViewField, PoNavbarItem } from '@po-ui/ng-components';
import { PoPageDynamicTableActions, PoPageDynamicTableCustomAction, PoPageDynamicTableCustomTableAction, PoPageDynamicTableField } from '@po-ui/ng-templates';

@Component({
  selector: 'glb-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public items: Array<PoNavbarItem> = [];

  ngOnInit(): void {
    this.LoadItems();
  }

  ngOnDestroy(): void {
    console.log('UserListComponent Method not implemented.');
  }

  public LoadItems() {
    this.items = [];

    this.items.push({
      label: 'Coligada',
      link: "../company"
    }, {
      label: 'Usuários',
      link: "../user"
    }
    );
  }

  title: string = "Usuários";
  detailedUser: any;
  apiAddress: string = "https://po-sample-api.herokuapp.com/v1/people";
  quickSearchWidth: number = 3;

  pageCustomActions: Array<PoPageDynamicTableCustomAction> = [
    { label: 'Imprimir', action: this.printPage.bind(this) }
  ];

  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
    //{ label: 'Details', action: this.onClickUserDetail.bind(this) }
  ];

  printPage() {
    window.print();
  }

  readonly actions: PoPageDynamicTableActions = {
    detail: 'user/view/:id',
    edit: 'user/edit/:id',
    new: 'user/new',
    remove: false,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', label: 'Identificador', key: true },
    { property: 'name', label: 'Nome' },
    { property: 'birthdate', label: 'Dt Nascimento', type: 'date' },
  ];
}
