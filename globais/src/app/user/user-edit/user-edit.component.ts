import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'glb-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title = 'Editando Usuário';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: 'user',
    save: 'user',
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Usuários', link: '/user' },       
      { label: 'Edição' }
    ]
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { property: 'name', label: 'Nome',  },
    { property: 'birthdate',label: 'Dt Nascimento',  type: 'date' },    
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params["id"] 
      ? `Alterando o usuário ${params["id"]}` 
      : this.title;
    });
  }
}